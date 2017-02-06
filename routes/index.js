var express = require('express');
var Knex = require('knex')
var config = require('../knexfile')
var knex = Knex(config[process.env.NODE_ENV || 'development'])
var db = require('../lib/db')(knex)

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	db.getAll('Restaurent',function(err,data) {
		res.render('index', { Restaurent:data });
		console.log(data)
	})
  
});

module.exports = router;

