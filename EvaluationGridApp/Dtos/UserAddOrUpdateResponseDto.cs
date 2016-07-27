namespace EvaluationGridApp.Dtos
{
    public class UserAddOrUpdateResponseDto: UserDto
    {
        public UserAddOrUpdateResponseDto(EvaluationGridApp.Models.User entity)
            :base(entity)
        {

        }
    }
}
