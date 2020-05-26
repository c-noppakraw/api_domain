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

module.exports = { list_payment, add_payment }; 