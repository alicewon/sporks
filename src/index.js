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

// add a user to array of users
router.post('/users/add', ctx => {
  ctx.body = users.push(ctx.request.body);
});

// retrieve all users
router.get('/users', ctx => {
  ctx.body = users;
});

// retrieve user with userid
router.get('/user/:id', ctx => {
  ctx.body = users[ctx.params.id];
});

// update user object
router.post('/user/:id', ctx => {
  ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

// remove user
router.post('users/remove', ctx => {
  ctx.body = users.find(user => user.id === ctx.params.id).remove();
})

router.get('/', ctx => {
  ctx.body = "this is the homepage!";
})

app
    .use(require('koa-body')())
    .use(router.allowedMethods())
    .use(router.routes());


app.listen(4321);