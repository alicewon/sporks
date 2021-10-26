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


router.post(
  'api/task/add',
  taskHandler
)

router.get(
  '/api/task/taskid',
  taskHandler
)

router.post(
  '/api/task/update',
  taskHandler
)

router.post(
  '/api/task/remove',
  taskHandler
)