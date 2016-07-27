using System;
using System.Collections.Generic;
using EvaluationGridApp.Dtos;
using EvaluationGridApp.Data;
using System.Linq;

namespace EvaluationGridApp.Services
{
    public class ScoreService : IScoreService
    {
        public ScoreService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Scores;
            _cache = cacheProvider.GetCache();
        }

        public ScoreAddOrUpdateResponseDto AddOrUpdate(ScoreAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.Score());
            _uow.SaveChanges();
            return new ScoreAddOrUpdateResponseDto(entity);
        }

        public ICollection<ScoreDto> Get()
        {
            ICollection<ScoreDto> response = new HashSet<ScoreDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new ScoreDto(entity)); }
            return response;
        }

        public ScoreDto GetById(int id)
        {
            return new ScoreDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.Score> _repository;
        protected readonly ICache _cache;
    }
}
