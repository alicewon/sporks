import Router from '@koa/router';
// const Mariadb = require('/Users/alice.w/Development/sporks/utils/db.js');
import Mariadb from "~/utils/db";

const router = new Router();

// working:
router.get(`/ping`, async (ctx) => {
  try {
    ctx.body = {
      status: "success",
      data: "pong"
    };
  } catch (err) {
    console.error(err);
  }
});

router.get('/', ctx => {
  ctx.body = 'Hello World';
});

router.post('/world', ctx => {
  console.log(ctx.params);
  ctx.body = 'goodbyeWorld';
});


// crud methods:
router.get('/tasks', async ctx => {
  console.log(ctx.params);
  let data = await Mariadb.query()
  ctx.body = {"data": data};
});

router.get('/tasks/byid' , ctx => {
  console.log(ctx.params);
  ctx.body = 'tasks by id'
})

router.post('/tasks' , ctx => {
  console.log(ctx.params);
  ctx.body = 'adding task'
})

router.post('/tasks/byid' , ctx => {
  console.log(ctx.params);
  ctx.body = 'edit task by id'
})

router.post('/tasks/byid' , ctx => {
  console.log(ctx.params);
  ctx.body = 'remove by id'
})


export default router;