const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

let users = [
  {
    name: 'alice',
    email: 'alice@won.net'
  },
  {
    name: 'joe',
    email: 'joe@won.net'
  },
  {
    name: 'sarah',
    email: 'sarah@won.net'
  }
];

router.get('/users', ctx => {
  ctx.body = users;
});

router.get('/user/:id', ctx => {
  ctx.body = users[ctx.params.id];
});

router.post('/user/:id', ctx => {
  ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

router.get('/', ctx => {
  ctx.body = "this is the homepage!";
})

app
    .use(require('koa-body')())
    .use(router.allowedMethods())
    .use(router.routes());


app.listen(4321);