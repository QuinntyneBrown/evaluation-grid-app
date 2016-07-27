using System;
using System.Collections.Generic;
using EvaluationGridApp.Data;
using EvaluationGridApp.Dtos;
using System.Data.Entity;
using System.Linq;
using EvaluationGridApp.Models;

namespace EvaluationGridApp.Services
{
    public class CriteriaService : ICriteriaService
    {
        public CriteriaService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Criterion;
            this.cache = cacheProvider.GetCache();
        }

        public CriteriaAddOrUpdateResponseDto AddOrUpdate(CriteriaAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Criteria());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new CriteriaAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<CriteriaDto> Get()
        {
            ICollection<CriteriaDto> response = new HashSet<CriteriaDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new CriteriaDto(entity)); }    
            return response;
        }


        public CriteriaDto GetById(int id)
        {
            return new CriteriaDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Criteria> repository;
        protected readonly ICache cache;
    }
}
