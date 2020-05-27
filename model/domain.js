const Database = require('../config/db');
const axios = require('axios')

const db = new Database()

const list_domain = async function (limit, start) {
    const sql = `SELECT * FROM domain_name WHERE status = 'enable' 
                ORDER BY id DESC 
                LIMIT ${limit} OFFSET ${start}`;
    const data_list = await db.query(sql)
    return data_list ;
}

const add_domain = async function (payload) {
    const insertSql = 'INSERT INTO domain_name SET ?;'
    if (await db.insert(insertSql, payload)) {
        const sql = "SELECT * FROM domain_name ORDER BY id DESC LIMIT 1 ";
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const search_domain = async function (keyword) {
    const sql = `SELECT * FROM domain_name WHERE name LIKE '%${keyword}%'`;
    const data_list = await db.query(sql)
    return data_list;
}

const get_domain = async function (id_domain) {
    const sql = `SELECT * FROM domain_name WHERE id = '${id_domain}'`;
    const data_list = await db.query(sql)
    return data_list;
}

const post_domain = async function (id_domain, payload) {
    const updateSql = `UPDATE domain_name SET ? WHERE id = '${id_domain}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM domain_name WHERE id = '${id_domain}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const delete_domain = async function (id_domain, payload) {
    const updateSql = `UPDATE domain_name SET status = ? WHERE id = '${id_domain}'`;
    if (await db.update(updateSql, payload)) {
        const sql = `SELECT * FROM domain_name WHERE id = '${id_domain}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const checkDomain = async (domainName) => {
    // return domainName
    const data = await axios.get(`https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_6CwWIBL1vJNLF9sytvYbyjmrLQDki&domainName=${domainName}`)
    return data
}

module.exports = { list_domain, add_domain, search_domain, get_domain, post_domain, delete_domain,checkDomain };