var express = require('express');
var router = express.Router();



router.get('/', function(req,res){
  console.log('get join url')
  res.sendFile(path.join(__dirname, '../../views/index'))
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
