namespace EvaluationGridApp.Models
{
    public class Score
    {
        public int Id { get; set; }
        public int? CriteriaId { get; set; }
        public int? TopicId { get; set; }
        public Criteria Criteria { get; set; }
        public Topic Topic { get; set; }
        public bool IsDeleted { get; set; }
    }
}
