const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const Dishes = require('../models/dishes');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req, res, next) =>{
    Dishes.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Constant-Type', 'application/json');
        res.json(dishes);
    }, (err)=> next(err))
    .catch((err)=> next(err));
});


dishRouter.route('/:dishID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.send('Serving dish  34 in folder');
});

module.exports = dishRouter;