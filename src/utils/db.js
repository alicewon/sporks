import mariadb from 'mariadb';

const pool = mariadb.createPool({
     host: 'localhost',
     port: '3306',
     user:'root',
     password: 'password',
     connectionLimit: 50,
     database: 'sporksdb'
});

class Mariadb {
  constructor () {

  }
    async getAllTasks() {
      let query = 'SELECT * FROM tasks';
      try {
          return await pool.query(query);
      } catch (error) {
          console.error(error);
      }
    }

    async getById(id) {
      let query = 'SELECT * FROM tasks WHERE ID = (?)';
      try {
          return await pool.query(query, [id.toString()]);
      } catch (error) {
          console.error(error);
      }
    }

    async add(value) {
        let query = 'INSERT INTO tasks(item) value (?)';
        try {
            return await pool.query(query, [value]);
        } catch (error) {
            console.error(error);
        }
    }

    async updateById(column, newValue, id) {
        let query = 'UPDATE tasks SET item = (?) WHERE ID = (?)';
        if (column === 'completed') {
            query = 'UPDATE tasks SET completed = (?) WHERE ID = (?)'
        }

        try {
        // let query = `UPDATE tasks SET ${column} = ("${newValue}") WHERE ID = ("${id.toString()}")`;
            return await pool.query(query, [newValue, id]);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteById(id) {
        let query = 'DELETE FROM tasks WHERE ID = (?)';
        try {
            return await pool.query(query, [id]);
        } catch (error) {
            console.error(error);
        }
    }

}

export default new Mariadb();