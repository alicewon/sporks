import Router from '@koa/router';
import Mariadb from "~/utils/db";

const router = new Router();

// curl -X GET http://localhost:3000/tasks
router.get('/tasks', async ctx => {
  let data = await Mariadb.getAllTasks()
  ctx.body = {"data": data};
});



// curl -X GET http://localhost:3000/tasks/4
// TODO: if item doesnt exist, return something
router.get('/tasks/:id', async ctx => {
  let data = await Mariadb.getById(ctx.params.id)
  ctx.body = {"data": data};
});



// curl -X POST -H 'Content-Type: application/json' --data '{"item":"wash car"}' http://localhost:3000/tasks/add
// TODO: if value is not valid, return something
router.post('/tasks/add', async ctx => {
  let column = Object.keys(ctx.request.body)[0];
  let value = ctx.request.body[column];

  let data = await Mariadb.add(value);
  ctx.body = {"data": data}
})



// curl -X POST -H 'Content-Type: application/json' --data '{"item":"fertilize plants"}' http://localhost:3000/tasks/update/3
// TODO: if item doesnt exist, return something
// TODO: if new value is not valid, return something
// TODO: if success, return the new item or true success message (async) ?
router.post('/tasks/update/:id', async ctx => {
  let id = ctx.params.id
  let column = Object.keys(ctx.request.body)[0];
  let newValue = ctx.request.body[column];
  await Mariadb.updateById(column, newValue, id)
});



// curl -X POST -H 'Content-Type: application/json' http://localhost:3000/tasks/delete/2
// TODO: if item doesnt exist, return something
// TODO: if success, return a true success message
router.post('/tasks/delete/:id', async ctx => {
  console.log(ctx.params.id);
  await Mariadb.deleteById(ctx.params.id)
  ctx.body = {"deleting": "true"};
});


export default router;