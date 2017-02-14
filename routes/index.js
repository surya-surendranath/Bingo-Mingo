var express = require('express');
var router = express.Router();
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)
var app = require('express')();


/* GET home page. */
router.get('/', function(req, res, next) {
	db.getFirstEight('Restaurent',function(err,data1) {
		db.getAll('Topdeals',function(err,data) {
			db.getFirstEight('Beautyspa',function(err,data2) {
				res.render('index', { Restaurent:data1,Topdeals:data ,Beautyspa:data2});
					console.log(req.body,"test3");
	
	 })
	})
  })
});

router.post('/Restaurent', function(req, res, next) {
	console.log(req.body,"test2");
	db.getAll('Restaurent',function(err,data1) {
		res.render('Restaurent',{Allrestaurent:data1})
		
	})
});

router.post('/Viewdeal', function(req, res, next) {
	console.log(req.body,"test");

	db.findOne('Restaurent', {id:req.body.Restaurent_id,Category:req.body.Restaurent_Category}, function(err, data){
         
		res.render('Viewdeal',{Viewdeal1:data,Image1:data.Image1,Category:data.Category,Image2:data.Image2,Image3:data.Image3,Image4:data.Image4})

		console.log(data)

	})
	
});
module.exports = router;

