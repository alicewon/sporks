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
      try {
          return await pool.query('SELECT * FROM tasks');
      } catch (error) {
          console.error(error);
      }
  }

  async getById(id) {
      let query = `SELECT * FROM tasks WHERE ID = ${id.toString()}`;
      try {
          return await pool.query(query);
      } catch (error) {
          console.error(error);
      }
  }

  async deleteById(id) {
        let query = `DELETE FROM tasks WHERE ID = ${id.toString()}`;
        try {
            return await pool.query(query);
        } catch (error) {
            console.error(error);
        }
    }

    async add(task) {
        let query = `INSERT INTO tasks(item)VALUES(${task})`;
        try {
            return await pool.query(query);
        } catch (error) {
            console.error(error);
        }
    }

async updateById(id) {
    let query = `UPDATE FROM tasks WHERE ID = ${id.toString()}`;
    try {
        return await pool.query(query);
    } catch (error) {
        console.error(error);
    }
}


}

export default new Mariadb();