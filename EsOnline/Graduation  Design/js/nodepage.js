/**
 * @created by LUOSHUN 2018-9-7
 * @updated by LUOSHUN 2018-9-10
 * @description nodejs校验前台数据
 */
var express = require('express'); // 调用模块
var bodyParser = require('body-parser');
var mysql = require('mysql');
var sql = require('./DBConnection.js'); // 引入当前目录的DBConnection模板
var app = express();
var connect = mysql.createConnection(sql.mysql);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.listen(9090);
// 跨域问题
app.all('/uaa/oauth/token', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'json,Content-Type,Content-Length, Authorization,Cache-Control, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  next();
});
// 接受GET方法
app.get('/uaa/oauth/token', function (req, res) {
  var name = req.query.username; // 获取前端发送过来的账号
  var psw = req.query.password; // 获取前端发送过来的密码
  // 验证提交的信息
  if (name == 'admin' && psw == 'admin') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    var o = {
      code: 0,
      accessToken: 'tempToken'
    };
    res.end(JSON.stringify(o));
  }
});
// 接受POST方法
app.post('/uaa/oauth/token', function (req, res) {
  var user = {
    'name': req.body.username, // 得到页面提交的数据
    'psw': req.body.password
  };
  find(res, user);
});
function find (response, user) {
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from user';
  // 执行查询语句
  connect.query(select, function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var tempUser = JSON.parse(JSON.stringify(res));
      // console.log(user);
      // console.log(tempUser);
      // 验证提交的信息
      if (user.name == tempUser[0].username && user.psw == tempUser[0].password) {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        var o = {
          data: {
            temp: 'aaa'
          },
          code: 0,
          accessToken: 'tempToken'
        };
        response.end(JSON.stringify(o));
      } else {
        response.end(JSON.stringify({ code: -1 }));
      }
    }
  });
  // 关闭数据库
  // connect.end();
};
