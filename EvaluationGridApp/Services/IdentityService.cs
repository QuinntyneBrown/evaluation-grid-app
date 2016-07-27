using EvaluationGridApp.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using EvaluationGridApp.Models;

namespace EvaluationGridApp.Services
{
    public class IdentityService : IIdentityService
    {
        public IdentityService(IUow uow, IEncryptionService encryptionService, ICacheProvider cacheProvider)
        {
            this._cache = cacheProvider.GetCache();
            this._encryptionService = encryptionService;
            this._uow = uow;
        }

        public Dtos.TokenDto TryToRegister(Dtos.RegistrationRequestDto registrationRequestDto)
        {
            throw new NotImplementedException();
        }

        public bool AuthenticateUser(string username, string password)
        {
            if (_uow.Users.GetAll().FirstOrDefault(x => x.Username.ToLower() == username.ToLower() && !x.IsDeleted) != null)
            {
                var transformedPassword = _encryptionService.TransformPassword(password);
                return ValidateUser(username, transformedPassword);
            }
            return false;
        }

        private bool ValidateUser(string usermame, string password)
        {
            return this._uow.Users.GetAll().Where(x => x.Username == usermame && x.Password == password).Count() > 0;
        }
        public ICollection<System.Security.Claims.Claim> GetClaimsForUser(string username)
        {
            var claims = new List<System.Security.Claims.Claim>();

            var user = _cache.FromCacheOrService<User>(() => _uow.Users.GetAll()
                .Include(x => x.Roles)
                .Single(x => x.Username == username), string.Format("User: {0}", username));

            claims.Add(new System.Security.Claims.Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", username));

            foreach (var role in user.Roles.Select(x => x.Name))
            {
                claims.Add(new System.Security.Claims.Claim("http://schemas.microsoft.com/ws/2008/06/identity/claims/role", role));
            }

            return claims;
        }

        protected readonly IUow _uow;
        protected readonly ICache _cache;
        protected readonly IEncryptionService _encryptionService;
    }
}
