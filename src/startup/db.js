var mysql = require('mysql')

let db = function () {
  let pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
  })

  //   let sql = 'SELECT * FROM products'
  //   con.query(sql, function (err, result) {
  //     if (err) throw err
  //     console.log(result)
  //   })

  return pool
}

export default new db()
