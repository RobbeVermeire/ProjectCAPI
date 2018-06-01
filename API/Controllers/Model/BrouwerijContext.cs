using Microsoft.EntityFrameworkCore;

namespace Model
{

    public class BrouwerijContext : DbContext
    {
        public BrouwerijContext(DbContextOptions<BrouwerijContext> options):base(options)
        {

        }
        public DbSet<Brouwerij> Bieren {get; set;}
        public DbSet<Brouwerij> Brouwerijen {get; set;}

    }
}