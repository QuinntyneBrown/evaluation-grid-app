namespace EvaluationGridApp.Dtos
{
    public class ScoreDto
    {
        public ScoreDto()
        {

        }

        public ScoreDto(Models.Score entity)
        {
            Id = entity.Id;
        }

        public int? Id { get; set; }
    }
}
