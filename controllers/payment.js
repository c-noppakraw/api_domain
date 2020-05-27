const express = require('express');
const router = express.Router();
const {Success,Error} = require('../response')
const model = require('../model/payment');

const list_payment = async function (req, res) {
    try {
        const data = await model.list_payment();
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
};

const add_payment = async function (req, res) {
    try {
        const payload = req.body;
        const data = await model.add_payment(payload) 
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
};

const search_payment = async function (req, res) {
    try {
        const {domain_name} = req.body;
        const data = await model.search_payment(domain_name);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const get_payment = async function (req, res) {
    try {
        const id_payment = req.params.id;
        const data = await model.get_payment(id_payment);
        new Success(res, 'success', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'not_found')
    }
}

const post_payment = async function (req, res) {
    try {
        const id_payment = req.params.id;
        const payload = req.body;
        const data = await model.post_payment(id_payment, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

const delete_payment = async function (req, res) {
    try {
        const id_payment = req.params.id;
        const payload = 'disable';
        const data = await model.delete_payment(id_payment, payload) ;
        new Success(res, 'created', data)
    } catch (err) {
        console.error(err)
        new Error(res, 'cant_insert')
    }
}

module.exports = { list_payment, add_payment, search_payment, get_payment, post_payment, delete_payment }; 