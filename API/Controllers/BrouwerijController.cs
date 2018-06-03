using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/brouwerij")]
public class BrouwerijController : Controller
{
    private readonly BierContext context;
    public BrouwerijController(BierContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public List<Brouwerij> GetAllBrouwerijen()
    {
        return context.Brouwerijen.ToList();
    }
    [HttpPost]
    public IActionResult CreateBrouwerij([FromBody] Brouwerij newBrouwerij)
    {
        context.Brouwerijen.Add(newBrouwerij);
        context.SaveChanges();
        return Created("", newBrouwerij);
    }

    [HttpPut]
    public IActionResult UpdateBrouwerij([FromBody] Brouwerij UpdateBrouwerij)
    {
        var orgBrouwerij = context.Brouwerijen.Find(UpdateBrouwerij.Id);
        if (orgBrouwerij == null)
            return NotFound();
        orgBrouwerij.Locatie = UpdateBrouwerij.Locatie;
        orgBrouwerij.Naam = UpdateBrouwerij.Naam;
        orgBrouwerij.Oprichtingsjaar = UpdateBrouwerij.Oprichtingsjaar;
        orgBrouwerij.Bieren = UpdateBrouwerij.Bieren;
        context.SaveChanges();
        return Ok(orgBrouwerij);
    }
    [Route("{id}")]
    [HttpGet]
    public IActionResult GetBrouwerij(int id)
    {
        var brouwerij = context.Brouwerijen
                            .Include(d=>d.Bieren)
                            .SingleOrDefault(d=>d.Id==id);
        if (brouwerij == null)
            return NotFound();
        return Ok(brouwerij);
    }
    [HttpDelete]
    public IActionResult DeleteBrouwerij(int id)
    {
        var brouwerij = context.Brouwerijen.Find(id);
        if (brouwerij==null)
            return NotFound();
        context.Brouwerijen.Remove(brouwerij);
        return Ok(brouwerij);
    }

}

