import Router from '@koa/router';
import {get} from 'lodash';
import Mariadb from "~/utils/db";

export const taskHandler = async ctx => {
  const path = '/tasks/getById/';
}

export const router = new Router();

router.get('/tasks',)
router.post('/tasks/getById',)
router.post('/tasks/addById',)
router.post('/tasks/editById',)
router.post('/tasks/removeById',)
