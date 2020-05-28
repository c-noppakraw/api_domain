const express = require('express');
const router = express.Router();
const {Success,Error} = require('../response')
const model = require('../model/ssl');

const list_ssl = async (req, res) => {
    try {
        const data = await model.list_ssl();
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
};

const add_ssl = async (req, res) => {
    try {
        const payload = req.body;
        const data = await model.add_ssl(payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

const search_ssl = async (req, res) => {
    try {
        const {id} = req.body;
        const data = await model.search_ssl(id);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const get_ssl = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await model.get_ssl(id);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const post_ssl = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const data = await model.post_ssl(id, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

const delete_ssl = async (req, res) => {
    try {
        const id = req.params.id;
        const payload = 'disable';
        const data = await model.delete_ssl(id, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

module.exports = { list_ssl, add_ssl, search_ssl, get_ssl, post_ssl, delete_ssl }; 