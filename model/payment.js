const Database = require('../config/db');

const db = new Database()

const list_payment = async function () {
    const sql = `SELECT * FROM price`;
    const data_list = await db.query(sql)
    return data_list ;
}

const add_payment = async function (payload) {
    const insertSql = 'INSERT INTO price SET ?;'
    if (await db.insert(insertSql, payload)) {
        const sql = "SELECT * FROM price ORDER BY id DESC LIMIT 1 ";
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

module.exports = { list_payment, add_payment };