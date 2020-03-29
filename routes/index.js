var express = require('express');
var router = express.Router();

//读数据库数据

var mysql = require('mysql');

// // 数据库信息
var connection = mysql.createConnection({
    host     : '59.110.52.228',
    user     : 'wxj',
    password : 'wxj123',
    database : 'wxj'
});


var data = [];
function select() {
    connection.connect(function (err) {
        if (err) {
            // console.error('error connecting:' + err.stack)
        }
        // console.log('connected as id ' + connection.threadId);
    })

    connection.query('SELECT * FROM syslist', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is:'+results);
        data = results;

    });
    connection.end();
}

select();
// console.log('The solution is:'+results);
console.log('The solution is:'+data);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ data: data });
});

module.exports = router;
