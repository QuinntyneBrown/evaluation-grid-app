using System;
using System.Collections.Generic;
using EvaluationGridApp.Data;
using EvaluationGridApp.Dtos;
using System.Data.Entity;
using System.Linq;
using EvaluationGridApp.Models;

namespace EvaluationGridApp.Services
{
    public class RoleService : IRoleService
    {
        public RoleService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Roles;
            this.cache = cacheProvider.GetCache();
        }

        public RoleAddOrUpdateResponseDto AddOrUpdate(RoleAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Role());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new RoleAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<RoleDto> Get()
        {
            ICollection<RoleDto> response = new HashSet<RoleDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new RoleDto(entity)); }    
            return response;
        }


        public RoleDto GetById(int id)
        {
            return new RoleDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Role> repository;
        protected readonly ICache cache;
    }
}
