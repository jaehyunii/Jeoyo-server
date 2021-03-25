var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
require('dotenv').config();


var connection = mysql.createConnection({
  host     : process.env.host,
  port     : process.env.port,
  user     : process.env.user,
  password : process.env.password,
  database : process.env.database
});

connection.connect();

router.get('/', function(req,res){
  console.log('get join url')
  res.sendFile(path.join(__dirname, '../../views/index'))
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
