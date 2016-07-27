namespace EvaluationGridApp.Dtos
{
    public class RoleDto
    {
        public RoleDto(EvaluationGridApp.Models.Role entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public RoleDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
