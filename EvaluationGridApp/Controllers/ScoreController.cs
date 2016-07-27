using EvaluationGridApp.Dtos;
using EvaluationGridApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace EvaluationGridApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/score")]
    public class ScoreController : ApiController
    {
        public ScoreController(IScoreService scoreService)
        {
            _scoreService = scoreService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(ScoreAddOrUpdateResponseDto))]
        public IHttpActionResult Add(ScoreAddOrUpdateRequestDto dto) { return Ok(_scoreService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(ScoreAddOrUpdateResponseDto))]
        public IHttpActionResult Update(ScoreAddOrUpdateRequestDto dto) { return Ok(_scoreService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<ScoreDto>))]
        public IHttpActionResult Get() { return Ok(_scoreService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(ScoreDto))]
        public IHttpActionResult GetById(int id) { return Ok(_scoreService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_scoreService.Remove(id)); }

        protected readonly IScoreService _scoreService;


    }
}
