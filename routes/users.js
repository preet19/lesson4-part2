var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  var userList = ['mack','matt','dil'];
  res.render('users', {
    title: 'user list',
    users: userList
  });
});

module.exports = router;
