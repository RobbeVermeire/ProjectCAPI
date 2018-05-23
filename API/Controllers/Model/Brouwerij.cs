using System.Collections.Generic;

namespace Model
{
    public class Brouwerij{

        public int Id { get; set; }
        public string Naam {get;set;}
        public ICollection<Bier> Bieren {get; set;} //lijst van alle gebrouwe bieren van de brouwerij
        public string Locatie { get; set;}
        public int Oprichtingsjaar{get; set;}
        

    }
}
