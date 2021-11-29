jest.mock('~/utilities/statsd');
jest.mock('~/database/utilities/handle-request');
jest.mock('~/database/utilities/transactions');

import {router} from 'routes/tasks';
import {Mariadb} from 'utils/db/mariadb';

jest.mock('~/db/tasks');

const getCtx = query => ({
  path: '/tasks',
  method: 'GET',
  request: {
    query
  },
});

describe("GET tasks", () => {
  beforeEach(() => {
    jest.spyOn()
  });
  it('should return all tasks currently in the tasks table', async () =>{
    jest.spyOn()
  })

  it('should return the task associated with the provided task ID')
  it('should return a error message if an item doesn\'t exist with the task ID provided')
});

describe("POST tasks", () => {
  beforeEach(() => {
    jest.spyOn()
  });
  it('should add a task to the tasks table and return a success message')
  it('should not add a task to the task table if provided with invalid values, and return an error message')

  it('should update the task\'s value associated with the task ID provided')
  it('should return an error message if the task ID to update doesn\'t exist')
  it('should return an error message if the task value to update is invalid')

  it('should delete the task associated with the task ID provided')
  it('should return an error message if the task ID to be deleted doesnt exist')

})




