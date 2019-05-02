/* 数据库配置模块 */
var connction = {};
connction.mysql = {
  host: 'localhost', // 数据库的地址
  user: 'root', // 用户名
  password: '123456', // 用户密码
  database: 'temp' // 数据库名字
};
module.exports = connction; // 用module.exports暴露出这个接口