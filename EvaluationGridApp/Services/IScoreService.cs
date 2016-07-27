using EvaluationGridApp.Dtos;
using System.Collections.Generic;

namespace EvaluationGridApp.Services
{
    public interface IScoreService
    {
        ScoreAddOrUpdateResponseDto AddOrUpdate(ScoreAddOrUpdateRequestDto request);
        ICollection<ScoreDto> Get();
        ScoreDto GetById(int id);
        dynamic Remove(int id);
    }
}
