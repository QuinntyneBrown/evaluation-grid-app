using System.Collections.Generic;

namespace EvaluationGridApp.Models
{
    public class Criteria
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Score> Scores { get; set; } = new HashSet<Score>();
    }
}
