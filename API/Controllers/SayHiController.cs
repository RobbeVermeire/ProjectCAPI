
using Microsoft.AspNetCore.Mvc;

public class SayHiController: Controller
{
    [Route("hi")]
    [HttpGet]
    public IActionResult Hi()
    {
        var res =  Content("Hello !");
        res.ContentType = "application/json";
        return res;
    }
    [Route("hi2")]
    [HttpGet]
    public IActionResult IkDoeNiets()
    {
        return Content("Hello Sven !");
    }

}

