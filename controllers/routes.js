var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/',function(req,res){
    burger.all(function(req,res){
        console.log(burger_data);
        res.render('index', {burger_data});
    })
    
})

module.exports = router;