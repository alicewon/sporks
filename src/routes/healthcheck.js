import Router from '@koa/router';
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
  let data = await Mariadb.getAllTasks()
  ctx.body = {"data": data};
});

router.get('/tasks/:id', async ctx => {
  console.log(ctx.params.id);
  let data = await Mariadb.getById(ctx.params.id)
  ctx.body = {"data": data};
});

router.post('/tasks/delete/:id', async ctx => {
  console.log(ctx.params.id);
  let data = Mariadb.getById(ctx.params.id);
  await Mariadb.deleteById(ctx.params.id)
  ctx.body = {"to-be-deleted": data};
});

router.post('/tasks/add', async ctx => {
  console.log(ctx.params);
  let data = await Mariadb.add(ctx.params)
  ctx.body = {"data": data}
})

router.post('/tasks/update/:id', async ctx => {
  console.log(ctx.params.id);
  await Mariadb.updateById(ctx.params.id)
  ctx.body = {"sucess-updated-data": Mariadb.getById(ctx.params.id)};
});





export default router;