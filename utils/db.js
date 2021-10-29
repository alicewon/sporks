const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost:3306',
     user:'root',
     password: 'password',
     connectionLimit: 50,
     database: 'sporksdb'
});


class Mariadb {
  constructor () {

  }
  query () {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * from tasks_data', function (error, results, fields) {
          if (error) {
              throw error
          };
          resolve(results)
          // console.log('The solution is: ', results[0].solution);
      });
    })
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
export default Mariadb;