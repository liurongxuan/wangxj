var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// 数据库信息
var connection = mysql.createConnection({
    host     : '59.110.52.228',
    user     : 'wxj',
    password : 'wxj123',
    database : 'wxj'
});


/* GET home page. */
router.get('/', function(req, res, next) {

	//var data = [];
	var ky = req.query.keyword;

	if (ky.length != 0) {
		connection.connect(function (err) {
        if (err) {
		            // console.error('error connecting:' + err.stack)
		        }
		        // console.log('connected as id ' + connection.threadId);
		})

		var sql = "SELECT * FROM syslist WHERE sysname like '%"+ky+"%' or syscode like '%"+ky+"%' or manager like '%"+ky+"%'";
		// var sql = "SELECT * FROM syslist";

		connection.query(sql, function (error, results, fields) {
	        if (error) throw error;
	        console.log('查询结果search查询结果:'+results);
	        //data = results;
	        res.render('search',{data: results ,keyword: ky});
	        // res.render('search',{keyword: ky });

	    });
	    // connection.end();

	}else{

	}
	// console.log('The solution is:'+results);
	// console.log('search要展示的数据:'+results);
	// console.log('接受到参数:'+ky);

	//res.render('search',{data: data });
});

module.exports = router;
