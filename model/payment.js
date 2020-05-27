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

const search_payment = async function (keyword) {
    const sql = `SELECT * FROM price WHERE domain_name LIKE '%${keyword}%'`;
    const data_list = await db.query(sql)
    return data_list;
}

const get_payment = async function (id_payment) {
    const sql = `SELECT * FROM price WHERE id = '${id_payment}'`;
    const data_list = await db.query(sql)
    return data_list;
}

const post_payment = async function (id_payment, payload) {
    const updateSql = `UPDATE price SET ? WHERE id = '${id_payment}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM price WHERE id = '${id_payment}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const delete_payment = async function (id_payment, payload) {
    const updateSql = `UPDATE price SET status = ? WHERE id = '${id_payment}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM price WHERE id = '${id_payment}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

module.exports = { list_payment, add_payment, search_payment, get_payment, post_payment, delete_payment };