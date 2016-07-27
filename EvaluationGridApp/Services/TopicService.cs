using System;
using System.Collections.Generic;
using EvaluationGridApp.Data;
using EvaluationGridApp.Dtos;
using System.Data.Entity;
using System.Linq;
using EvaluationGridApp.Models;

namespace EvaluationGridApp.Services
{
    public class TopicService : ITopicService
    {
        public TopicService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Topics;
            this.cache = cacheProvider.GetCache();
        }

        public TopicAddOrUpdateResponseDto AddOrUpdate(TopicAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Topic());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TopicAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TopicDto> Get()
        {
            ICollection<TopicDto> response = new HashSet<TopicDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new TopicDto(entity)); }    
            return response;
        }


        public TopicDto GetById(int id)
        {
            return new TopicDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Topic> repository;
        protected readonly ICache cache;
    }
}
