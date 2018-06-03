using System.Collections.Generic;
using Newtonsoft.Json;

namespace Model
{
    public class Brouwerij{

        public int Id { get; set; }
        public string Naam {get;set;}
        public string Locatie { get; set;}
        public int Oprichtingsjaar{get; set;}
        
        [JsonIgnore]
         public ICollection<Bier> Bieren {get; set;} //lijst van alle gebrouwe bieren van de brouwerij

    }
}
