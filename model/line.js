const Database = require('../config/db');
const db = new Database()

const list_domain = async () => {
    const sql = `SELECT * FROM domain_name WHERE status = 'enable' `;
    const data_list = await db.query(sql)
    return data_list ;
}

module.exports = { list_domain };