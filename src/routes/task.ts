// import validateRequest from 'middleware/validate-request';
import Router from '@koa/router';

const router = new Router();

export const taskHandler = async ctx => {


const success = response.status === 200;

  ctx.status = response.status;
  ctx.body = {
    success,
    task: success ? response.body : {},
  }
}

router.get('/', ctx => {
  ctx.body = "this is the homepage!";
})

router.post(
  'api/task/add',
  //validateRequest
  taskHandler
)

//get task by id
router.get(
  '/api/task/byid',

)

router.post(
  '/api/task/updatebyid',
    //validateRequest(taskid)
  taskHandler
)

router.post(
  '/api/task/removebyid',
    //validateRequest(taskid)
  taskHandler
)

//task/all to get all tasks
// make sure all  paths sound like function, consistency is most important
// make it obviuos, be what the consumer of api should expect
// get list of compile things i ran into and fixed
// put everything under source
// avoid relative paths, use absolute paths in ts imports : ~/bar/foo
// through http requests crud, use curl