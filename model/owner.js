const Database = require('../config/db');

const db = new Database()

const list_owner = async (limit, start) => {
    const sql = `SELECT * FROM owner WHERE status = 'enable'`;
    const data_list = await db.query(sql)
    return data_list ;
}

const add_owner = async (payload) => {
    const insertSql = 'INSERT INTO owner SET ?;'
    if (await db.insert(insertSql, payload)) {
        const sql = "SELECT * FROM owner ORDER BY id DESC LIMIT 1 ";
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const search_owner = async (keyword) => {
    const sql = `SELECT * FROM owner WHERE name LIKE '%${keyword}%'`;
    const data_list = await db.query(sql)
    return data_list;
}

const get_owner = async (id_owner) => {
    const sql = `SELECT * FROM owner WHERE id = '${id_owner}'`;
    const data_list = await db.query(sql)
    return data_list;
}

const post_owner = async (id_owner, payload) => {
    const updateSql = `UPDATE owner SET ? WHERE id = '${id_owner}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM owner WHERE id = '${id_owner}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const delete_owner = async (id_owner, payload) => {
    const updateSql = `UPDATE owner SET status = ? WHERE id = '${id_owner}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM owner WHERE id = '${id_owner}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

module.exports = { list_owner, add_owner, search_owner, get_owner, post_owner, delete_owner };