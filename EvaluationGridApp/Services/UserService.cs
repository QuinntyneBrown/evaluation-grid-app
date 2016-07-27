using System;
using System.Collections.Generic;
using EvaluationGridApp.Data;
using EvaluationGridApp.Dtos;
using System.Data.Entity;
using System.Linq;
using EvaluationGridApp.Models;

namespace EvaluationGridApp.Services
{
    public class UserService : IUserService
    {
        public UserService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Users;
            this.cache = cacheProvider.GetCache();
        }

        public UserAddOrUpdateResponseDto AddOrUpdate(UserAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new User());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new UserAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<UserDto> Get()
        {
            ICollection<UserDto> response = new HashSet<UserDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new UserDto(entity)); }    
            return response;
        }


        public UserDto GetById(int id)
        {
            return new UserDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<User> repository;
        protected readonly ICache cache;
    }
}
