using EvaluationGridApp.Dtos;
using System.Collections.Generic;

namespace EvaluationGridApp.Services
{
    public interface ICriteriaService
    {
        CriteriaAddOrUpdateResponseDto AddOrUpdate(CriteriaAddOrUpdateRequestDto request);
        ICollection<CriteriaDto> Get();
        CriteriaDto GetById(int id);
        dynamic Remove(int id);
    }
}
