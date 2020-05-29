const express = require('express');
const router = express.Router();
const {Success,Error} = require('../response')
const model = require('../model/owner');

const list_owner = async (req, res) => {
    try {
        const data = await model.list_owner();
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
};

const add_owner = async (req, res) => {
    try {
        const payload = req.body;
        const data = await model.add_owner(payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
};

const search_owner = async (req, res) => {
    try {
        const {name} = req.body;
        const data = await model.search_owner(name);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const get_owner = async (req, res) => {
    try {
        const id_owner = req.params.id;
        const data = await model.get_owner(id_owner);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const post_owner = async (req, res) => {
    try {
        const id_owner = req.params.id;
        const payload = req.body;
        const data = await model.post_owner(id_owner, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

const delete_owner = async (req, res) => {
    try {
        const id_owner = req.params.id;
        const payload = 'disable';
        const data = await model.delete_owner(id_owner, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

module.exports = { list_owner, add_owner, search_owner, get_owner, post_owner, delete_owner }; 