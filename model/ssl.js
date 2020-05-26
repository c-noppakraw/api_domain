const Database = require('../config/db');

const db = new Database()

const list_ssl = async function () {
    const sql = 
                `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                FROM ssl_certificate 
                LEFT JOIN domain_name 
                ON ssl_certificate.id_domain = domain_name.id 
                WHERE ssl_certificate.status = 'enable' `;
    const data_list = await db.query(sql)
    return data_list ;
}

const add_ssl = async function (payload) {
    const insertSql = 'INSERT INTO ssl_certificate SET ?;'
    if (await db.insert(insertSql, payload)) {
        const sql = 
                    `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                    FROM ssl_certificate 
                    LEFT JOIN domain_name 
                    ON ssl_certificate.id_domain = domain_name.id 
                    ORDER BY ssl_certificate.id DESC LIMIT 1`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const search_ssl = async function (id) {
    const sql = 
                `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                FROM ssl_certificate
                LEFT JOIN domain_name
                ON ssl_certificate.id_domain = domain_name.id
                WHERE ssl_certificate.id = '${id}'`;
    const data_list = await db.query(sql)
    return data_list;
}

const get_ssl = async function (id) {
    const sql = 
                `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                FROM ssl_certificate
                LEFT JOIN domain_name
                ON ssl_certificate.id_domain = domain_name.id
                WHERE ssl_certificate.id = '${id}'`;
    const data_list = await db.query(sql)
    return data_list;
}

const post_ssl = async function (id, payload) {
    const updateSql = `UPDATE ssl_certificate SET ? WHERE id = '${id}'`;
    if (await db.update(updateSql, payload)) {
        const sql = 
                    `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                    FROM ssl_certificate
                    LEFT JOIN domain_name
                    ON ssl_certificate.id_domain = domain_name.id
                    WHERE ssl_certificate.id = '${id}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

const delete_ssl = async function (id, payload) {
    const updateSql = `UPDATE ssl_certificate SET status = ? WHERE id = '${id}'`;
    if (await db.update(updateSql, payload)) {
        const sql = 
                    `SELECT ssl_certificate.id, ssl_certificate.id_domain, domain_name.name, ssl_certificate.status, ssl_certificate.creation_date, ssl_certificate.updated_date, ssl_certificate.expiry_date
                    FROM ssl_certificate
                    LEFT JOIN domain_name
                    ON ssl_certificate.id_domain = domain_name.id
                    WHERE ssl_certificate.id = '${id}'`;
        const data_list = await db.query(sql)
        return data_list
    }
    throw Error()
}

module.exports = { list_ssl, add_ssl, search_ssl, get_ssl, post_ssl, delete_ssl };