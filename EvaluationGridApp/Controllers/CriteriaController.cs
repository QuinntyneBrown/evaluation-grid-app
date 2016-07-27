using EvaluationGridApp.Dtos;
using EvaluationGridApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace EvaluationGridApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/criteria")]
    public class CriteriaController : ApiController
    {
        public CriteriaController(ICriteriaService criteriaService)
        {
            _criteriaService = criteriaService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(CriteriaAddOrUpdateResponseDto))]
        public IHttpActionResult Add(CriteriaAddOrUpdateRequestDto dto) { return Ok(_criteriaService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(CriteriaAddOrUpdateResponseDto))]
        public IHttpActionResult Update(CriteriaAddOrUpdateRequestDto dto) { return Ok(_criteriaService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<CriteriaDto>))]
        public IHttpActionResult Get() { return Ok(_criteriaService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(CriteriaDto))]
        public IHttpActionResult GetById(int id) { return Ok(_criteriaService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_criteriaService.Remove(id)); }

        protected readonly ICriteriaService _criteriaService;


    }
}
