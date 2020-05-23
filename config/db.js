const mysql = require('mysql2/promise');

const config = {
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'domain_name'
}

class Database {
  constructor() {
  }

  async query(sql) {
    const conn = await this.connection()
    const [data] = await conn.query(sql);
    await conn.end();
    return data
  }

  async insert(sql, params) {
    const conn = await this.connection();
    const data = await conn.query(sql, [params])
    await conn.end();
    return data
  }

  async update(sql, params) {
    const conn = await this.connection();
    const data = await conn.query(sql, [params])
    await conn.end();
    return data
  }
  

  async connection() {
    return await mysql.createConnection(config)
  }
}

module.exports = Database