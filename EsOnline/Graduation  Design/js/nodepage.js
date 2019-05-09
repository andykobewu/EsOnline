/**
 * @created by LUOSHUN 2019-5-1
 * @description esonline
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
app.listen(8080);
// 跨域问题
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'json,Content-Type,Content-Length, Authorization,Cache-Control, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  next();
});
// 接受GET方法
app.get('/esonline/login', function (req, res) {
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
app.post('/esonline/login', function (req, res) {
  var user = {
    'name': req.body.username, // 得到页面提交的数据
    'psw': req.body.password
  };
  find(res, user);
});
// 接受POST方法
app.post('/esonline/person', function (req, res) {
  var user = req.body.username;
  var response = res;
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from user where username=?';
  // 执行查询语句
  connect.query(select, [user], function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var persondata = JSON.parse(JSON.stringify(res));
      // 验证提交的信息
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var o = {
        data: {
          persondata: persondata[0]
        },
        code: 0,
        accessToken: 'tempToken'
      };
      response.end(JSON.stringify(o));
    }
  });
});
// 接受POST方法
app.post('/esonline/submit', function (req, response) {
  var contact = {
    'name': req.body.name,
    'address': req.body.address,
    'website': req.body.website,
    'subject': req.body.subject,
    'type': req.body.type,
    'description': req.body.description
  };
  var insert = 'insert into contact(name,address,website,subject,type,description) values(?,?,?,?,?,?)';
  var addparam = [contact.name, contact.address, contact.website, contact.subject, contact.type, contact.description];
  // 执行查询语句
  connect.query(insert, addparam, function (err, result) {
    if (err) {
      return response.end(JSON.stringify({ code: -1, msg: err.message }));
    } else {
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var temp = {
        code: 0,
        data: result
      };
      return response.end(JSON.stringify(temp));
    }
  });
});
// 接受POST方法
app.post('/esonline/confirm', function (req, res) {
  var form = {
    'username': req.body.username, // 得到页面提交的数据
    'name': req.body.name,
    'sex': req.body.sex,
    'description': req.body.description
  };
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var update = 'update user set name=?,sex=?,description=? where username = ?';
  var updateparam = [form.name, form.sex, form.description, form.username];
  connect.query(update, updateparam, function (err, result) {
    if (err) {
      console.log(err.message);
      return res.end(JSON.stringify({ code: -1, data: result }));
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var temp = {
        code: 0,
        data: result
      };
      return res.end(JSON.stringify(temp));
    }
  });
});
app.post('/esonline/regist', function (req, res) {
  var user = {
    'name': req.body.username, // 得到页面提交的数据
    'psw': req.body.password
  };
  regist(res, user);
});
// 接受POST方法
app.post('/esonline/recommendList', function (req, res) {
  var response = res;
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from recommendList';
  // 执行查询语句
  connect.query(select, function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var recommendList = JSON.parse(JSON.stringify(res));
      // console.log(pagedata);
      // 验证提交的信息
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var o = {
        data: {
          pagedata: recommendList
        },
        code: 0
      };
      response.end(JSON.stringify(o));
    }
  });
});
// 接受POST方法
app.post('/esonline/timeschange', function (req, res) {
  var response = res;
  var change = {
    'times': req.body.times, // 得到页面提交的数据
    'id': req.body.id
  };
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'update recommendList set times=? where id=?';
  var updateparam = [change.times, change.id];
  // 执行查询语句
  connect.query(select, updateparam, function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var timeschange = JSON.parse(JSON.stringify(res));
      // 验证提交的信息
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var o = {
        data: {
          pagedata: timeschange
        },
        code: 0
      };
      response.end(JSON.stringify(o));
    }
  });
});
// 接受POST方法
app.post('/esonline/imgList', function (req, res) {
  var response = res;
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from imgList';
  // 执行查询语句
  connect.query(select, function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var imgList = JSON.parse(JSON.stringify(res));
      // console.log(pagedata);
      // 验证提交的信息
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      var o = {
        data: {
          pagedata: imgList
        },
        code: 0
      };
      response.end(JSON.stringify(o));
    }
  });
});
function regist(response, user) {
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from user';
  var insert = 'insert into user(username,password) values(?,?)';
  var addparam = [user.name, user.psw];
  // 执行查询语句
  connect.query(select, function (err, res) {
    // 查询出错则返回-1
    if (err) {
      return response.end(JSON.stringify({ code: -1 }));
    } else {
      // 转换查询的信息为json格式
      var tempUser = JSON.parse(JSON.stringify(res));
      // console.log(user);
      // console.log(tempUser);
      // 验证提交的信息
      for (var i = 0; i < tempUser.length; i++) {
        if (user.name == tempUser[i].username) {
          response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          var o = {
            data: {
              msg: '用户名已存在，请重新输入！'
            },
            code: 1
          };
          return response.end(JSON.stringify(o));
        }
      }
      connect.query(insert, addparam, function (err, result) {
        if (err) {
          return response.end(JSON.stringify({ code: -1 }));
        } else {
          response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          var temp = {
            code: 0,
            data: result
          };
          return response.end(JSON.stringify(temp));
        }
      });
    }
  });
  // 关闭数据库
  // connect.end();
};
function find(response, user) {
  // 如果数据库未连接，连接数据库，不允许数据库有多个连接（可以调用release()方法），end()之后不可以再连接
  if (!connect) {
    connect.connect();
  }
  var select = 'select * from user where username=?';
  // 执行查询语句
  connect.query(select, [user.name], function (err, res) {
    // 查询出错则返回-1
    if (err) {
      response.end(JSON.stringify({ code: -1, msg: err }));
    } else {
      // 转换查询的信息为json格式
      var tempUser = JSON.parse(JSON.stringify(res));
      // console.log(user);
      // console.log(tempUser);
      // 验证提交的信息
      if (user.psw == tempUser[0].password) {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        var o = {
          data: {
            temp: res
          },
          code: 0
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
