namespace EvaluationGridApp.Dtos
{
    public class CriteriaDto
    {
        public CriteriaDto(EvaluationGridApp.Models.Criteria entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public CriteriaDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
