using Microsoft.EntityFrameworkCore;

namespace Model
{

    public class BierContext : DbContext
    {
        public BierContext(DbContextOptions<BierContext> options):base(options)
        {

        }
        public DbSet<Bier> Bieren {get; set;}
        public DbSet<Brouwerij> Brouwerijen {get; set;}

    }
}