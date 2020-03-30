var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');

var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// view engine setup
// app.engine("html",ejs.__express);
// app.set("engin","html");

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.message = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  console.log("日志！！！！！");
  console.log("消息："+res.locals.message);
  console.log("状态"+res.status );


  console.log("开始了！！！！！！");
  res.render('error');
});

// app.use('/vendor',express.static('./vendor'));
//app.use(express.static(__dirname + '/public'));

module.exports = app;


// app.get('/index.html', function (req, res){
//    res.sendFile( __dirname + "/" + "index.html" );
// })

// app.post('/process_post', urlencodedParser, function (req, res) {
 
//    // 输出 JSON 格式
//    var response = {
//        "sysname":req.body.sysname,
       
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })


var server = app.listen(3000, function () {
 
var host = server.address().address
var port = server.address().port
 
console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})















