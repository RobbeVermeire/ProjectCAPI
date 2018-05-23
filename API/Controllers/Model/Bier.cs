namespace Model
{
    public class Bier
    {

        public int Id { get; set; }
        public string Naam { get; set; }
        public double EBC { get; set; } //Maat voor kleur van bier: https://nl.wikipedia.org/wiki/EBC
        public string Kleur { get; set; } //Afgeleud van EBC
        public double AlcoholGehalte { get; set; }
        public double EBU { get; set; } //Maat voor bitterheid van bier
        public Brouwerij Brouwerij { get; set; }


    }
}
