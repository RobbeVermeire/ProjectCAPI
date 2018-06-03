using System.Linq;

namespace Model{
    public class DBInitializer
    {
        public static void Initialize(BierContext context)
        {
            Brouwerij brouwerij= new Brouwerij();
            Bier bier = new Bier();

            //Create db if it doesn't exist:
            context.Database.EnsureCreated();
            //Zijn er brouwerijen?

            if(!context.Brouwerijen.Any())
            {
                 brouwerij. Naam="Piedboeuf";
                 brouwerij.Locatie="Piedboeuf";
                 brouwerij.Oprichtingsjaar=1987 ;                 
            }

            //Zijn er boeken?:
            if(!context.Bieren.Any())
            {
                bier.Naam="Jupiler";
                bier.AlcoholGehalte=5.2;
                bier.EBC=6.5;
                bier.Kleur="Blond";
                bier.EBU=21;
                bier.Brouwerij=brouwerij;
            }
                
                if(!context.Bieren.Any() || !context.Brouwerijen.Any())
                //Add bier tot collection van bieren
                context.Bieren.Add(bier);
                context.Brouwerijen.Add(brouwerij);
                //Slaag op in DB:
                context.SaveChanges();
            }
        }
    }
