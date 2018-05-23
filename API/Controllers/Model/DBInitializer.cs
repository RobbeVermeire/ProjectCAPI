using System.Linq;

namespace Model{
    public class DBInitializer
    {
        public static void Initialize(BierContext context)
        {
            //Create db if it doesn't exist:
            context.Database.EnsureCreated();

            //Zijn er boeken?:
            if(!context.Bieren.Any())
            {
                var beer = new Bier()
                {
                    Naam="Jupiler",
                    AlcoholGehalte=5.2,
                    EBC=6.5,
                    Kleur="Blond",
                    EBU=21
                };
                //Add bier tot collection van bieren
                context.Bieren.Add(beer);
                //Slaag op in DB:
                context.SaveChanges();
            }
        }
    }
}