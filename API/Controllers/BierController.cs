using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/bier")]
public class BierController : Controller
{
    private readonly BierContext context;
    public BierController(BierContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public List<Bier> GetAllBieren(string Naam, string Brouwerij, string Kleur, double AlcoholGehalte, double EBU, string sort, int? page,int length=3
        ,string dir= "asc")
    {
        IQueryable<Bier> query = context.Bieren;
        if(!string.IsNullOrWhiteSpace(Naam))
            query = query.Where(d=>d.Naam == Naam);
        if(!string.IsNullOrWhiteSpace(Brouwerij))
            query = query.Where(d=>d.Brouwerij.Naam == Brouwerij);
        if(!string.IsNullOrWhiteSpace(Kleur))
            query = query.Where(d=>d.Kleur == Kleur);
        if(!double.IsNaN(AlcoholGehalte))
            query = query.Where(d=>d.AlcoholGehalte < AlcoholGehalte-1 && d.AlcoholGehalte > AlcoholGehalte+1);
        if(!double.IsNaN(EBU))
            query = query.Where(d=>d.EBU == EBU);
        
        if(!string.IsNullOrWhiteSpace(sort))
        {
            switch(sort)
            {
                case "AlcoholGehalte":
                    if(dir == "asc")
                        query = query.OrderBy(d=>d.AlcoholGehalte);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d=>d.AlcoholGehalte);
                        break;                   
                case "Naam":
                    if(dir == "asc")
                        query = query.OrderBy(d=>d.Naam);
                    else if(dir == "desc")
                        query = query.OrderByDescending(d=>d.Naam);
                        break;                   
            }
        }

        if(page.HasValue)
            query=query.Skip(page.Value * length);
        query=query.Take(length);
        return context.Bieren.ToList();
    }

    [HttpPost]
    public IActionResult CreateBeer([FromBody] Bier newBier)
    {
        context.Bieren.Add(newBier);
        context.SaveChanges();
        return Created("", newBier);
    }

    [HttpPut]
    public IActionResult UpdateBier([FromBody] Bier updateBier)
    {
        var orgBier = context.Bieren.Find(updateBier.Id);
        if(orgBier == null)
            return NotFound();
        orgBier.Naam = updateBier.Naam;
        orgBier.EBC = updateBier.EBC;
        orgBier.EBU = updateBier.EBU;
        orgBier.Kleur = updateBier.Kleur;
        orgBier.Brouwerij = updateBier.Brouwerij;
        orgBier.AlcoholGehalte = updateBier.AlcoholGehalte;

        context.SaveChanges();
        return Ok(orgBier);

    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetBier(int id)
    {
        var bier = context.Bieren
                        .Include(d =>d.Brouwerij)
                        .SingleOrDefault(d=>d.Id==id);
        if (bier == null)
            return NotFound();
        return Ok(bier);
    }
    [HttpDelete]
    public IActionResult DeleteBier(int id)
    {
        var bier = context.Bieren.Find(id);
        if (bier == null)
            return NotFound();
        context.Bieren.Remove(bier);
        context.SaveChanges();
        return NoContent();

    }


}