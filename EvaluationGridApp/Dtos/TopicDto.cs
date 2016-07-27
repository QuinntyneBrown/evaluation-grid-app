namespace EvaluationGridApp.Dtos
{
    public class TopicDto
    {
        public TopicDto(EvaluationGridApp.Models.Topic entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TopicDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
