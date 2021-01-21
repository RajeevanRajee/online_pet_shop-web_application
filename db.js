const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'husseindb',
  password: 'postgres',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM product ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getUserById = (request, response) => {
    var pname = (request.params.pname)
  /*
    pool.query('SELECT * FROM product WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }*/
  pool.query('SELECT orders.name,orders.pname,(product.price * orders.qty) as totalamount FROM orders, product WHERE orders.name = product.productname and orders.pname = $1', [pname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


  module.exports = {
    getUsers,
    getUserById,
    
  }