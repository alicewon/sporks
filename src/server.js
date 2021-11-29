import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import tasksRoutes from "~/routes/tasks";

import Router from '@koa/router';

const router = new Router();

const app = new Koa();
const PORT = process.env.PORT || 3000;

app
  .use(bodyParser());
app
  .use(logger());
app
  .use(tasksRoutes.routes());

app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.log(err);
  });
