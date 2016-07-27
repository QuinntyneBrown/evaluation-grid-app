using EvaluationGridApp.Dtos;
using System.Collections.Generic;

namespace EvaluationGridApp.Services
{
    public interface ITopicService
    {
        TopicAddOrUpdateResponseDto AddOrUpdate(TopicAddOrUpdateRequestDto request);
        ICollection<TopicDto> Get();
        TopicDto GetById(int id);
        dynamic Remove(int id);
    }
}
