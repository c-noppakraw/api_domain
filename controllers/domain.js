const express = require('express');
const router = express.Router();
const {Success,Error} = require('../response')
const model = require('../model/domain');

const list_domain = async function (req, res) {
    try {
        let start = req.query.start;
        let limit = req.query.limit;

        if (start == 1) {
            start = 0;
        } else {
            start = (start * limit) - limit;
        } 

        const data = await model.list_domain(limit, start);
        // const data = await model.list_domain();
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
};

const add_domain = async function (req, res) {
    try {
        const payload = req.body;
        const data = await model.add_domain(payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
};

const search_domain = async function (req, res) {
    try {
        const {name} = req.body;
        const data = await model.search_domain(name);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const get_domain = async function (req, res) {
    try {
        const id_domain = req.params.id;
        const data = await model.get_domain(id_domain);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const post_domain = async function (req, res) {
    try {
        const id_domain = req.params.id;
        const payload = req.body;
        const data = await model.post_domain(id_domain, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

const delete_domain = async function (req, res) {
    try {
        const id_domain = req.params.id;
        const payload = 'disable';
        const data = await model.delete_domain(id_domain, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

module.exports = { list_domain, add_domain, search_domain, get_domain, post_domain, delete_domain }; 