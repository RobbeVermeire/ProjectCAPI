using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
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
    public List<Bier> GetAllBieren()
    {
        return context.Bieren.ToList();
    }

    [HttpPost]
    public IActionResult CreateBook([FromBody] Bier newBier)
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
        var bier = context.Bieren.Find(id);
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