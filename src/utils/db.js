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
  async query () {
      try {
          return await pool.query('SELECT * FROM tasks');
      } catch (error) {
          console.error(error);
      }
  }
}


// async function asyncFunction() {
//   let conn;
//   try {
// 	    conn = await pool.getConnection();
//       const rows = await conn.query("SELECT 1 as val");
//       console.log(rows); //[ {val: 1}, meta: ... ]
//       const res = await conn.query("INSERT INTO tasks value (?, ?)", [1, "mariadb"]);
//       console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

//   } catch (err) {
// 	    throw err;
//   } finally {
// 	    if (conn) return conn.end();
//   }
// }

// module.exports = new Mariadb()
export default new Mariadb();