import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import healthcheckRoutes from "./routes/healthcheck";

const app = new Koa();
const PORT = process.env.PORT || 3000;

app
  .use(bodyParser());
app
  .use(require('koa-body')())
app
  .use(logger());
app
  .use(healthcheckRoutes.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.log(err);
  });

export default server;