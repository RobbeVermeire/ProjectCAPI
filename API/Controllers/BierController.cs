using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Model;

[Route("api/v1/bier")]
public class BierController: Controller
{
    private readonly BierContext context;
    public BierController(BierContext context)
    {
        this.context=context;
    }

    [HttpGet]
    public List<Bier> GetAllBieren()
    {
        return context.Bieren.ToList();
    }
}