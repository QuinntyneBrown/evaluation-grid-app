using EvaluationGridApp.Dtos;
using EvaluationGridApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace EvaluationGridApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/topic")]
    public class TopicController : ApiController
    {
        public TopicController(ITopicService topicService)
        {
            _topicService = topicService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(TopicAddOrUpdateResponseDto))]
        public IHttpActionResult Add(TopicAddOrUpdateRequestDto dto) { return Ok(_topicService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(TopicAddOrUpdateResponseDto))]
        public IHttpActionResult Update(TopicAddOrUpdateRequestDto dto) { return Ok(_topicService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<TopicDto>))]
        public IHttpActionResult Get() { return Ok(_topicService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(TopicDto))]
        public IHttpActionResult GetById(int id) { return Ok(_topicService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_topicService.Remove(id)); }

        protected readonly ITopicService _topicService;


    }
}
