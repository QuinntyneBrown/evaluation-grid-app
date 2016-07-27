using EvaluationGridApp.Models;

namespace EvaluationGridApp.Data
{
    public interface IUow
    {
        IRepository<Score> Scores { get; }
        IRepository<Criteria> Criterion { get; }
        IRepository<Topic> Topics { get; }
        IRepository<User> Users { get; }
        IRepository<Role> Roles { get; }

        void SaveChanges();
    }
}
