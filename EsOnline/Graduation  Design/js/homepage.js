var app = new Vue({
  el: '#homepage',
  data: function () {
    return {
      videoName: '',
      allLesson: [],
      pageconut: 1,
      total: 0,
      imgList: [],
      recommendList: [],
      dialogVisible: false,
      isShow: false,
      videosrc: '',
      form: { username: '', name: '', sex: '', description: '' },
      ruleForm: { name: '', address: '', website: '', subject: '', type: [], description: '' },
      contact: false,
      currentPage: 1,
      video: false,
      home: true,
      categories: false,
      search: false,
      activeIndex: '1',
      input: '',
      values: {
        username: '',
        password: ''
      },
      listContent: [{
        id: '1',
        content: '前沿/区块链/人工智能',
        childContent1: [{
          id: '1.1',
          content: '微服务',
          href: '#'
        }, {
          id: '1.2',
          content: '区块链',
          href: '#'
        }, {
          id: '1.3',
          content: '以太网',
          href: '#'
        }, {
          id: '1.4',
          content: '人工智能',
          href: '#'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          video: '../video/video.mp4',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          video: '../video/video.mp4',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          video: '../video/video.mp4',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          video: '../video/video.mp4',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }, {
        id: '2',
        content: '前端/小程序/JS',
        childContent1: [{
          id: '2.1',
          content: '微服务'
        }, {
          id: '2.2',
          content: '区块链'
        }, {
          id: '2.3',
          content: '以太网'
        }, {
          id: '2.4',
          content: '人工智能'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }, {
        id: '3',
        content: '后端/JAVA/Python',
        childContent1: [{
          id: '3.1',
          content: '微服务'
        }, {
          id: '3.2',
          content: '区块链'
        }, {
          id: '3.3',
          content: '以太网'
        }, {
          id: '3.4',
          content: '人工智能'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }, {
        id: '4',
        content: '移动/Android/IOS',
        childContent1: [{
          id: '4.1',
          content: '微服务'
        }, {
          id: '4.2',
          content: '区块链'
        }, {
          id: '4.3',
          content: '以太网'
        }, {
          id: '4.4',
          content: '人工智能'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }, {
        id: '5',
        content: '云计算/大数据/容器',
        childContent1: [{
          id: '5.1',
          content: '微服务'
        }, {
          id: '5.2',
          content: '区块链'
        }, {
          id: '5.3',
          content: '以太网'
        }, {
          id: '5.4',
          content: '人工智能'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }, {
        id: '6',
        content: '运维/测试/数据库',
        childContent1: [{
          id: '6.1',
          content: '微服务'
        }, {
          id: '6.2',
          content: '区块链'
        }, {
          id: '6.3',
          content: '以太网'
        }, {
          id: '6.4',
          content: '人工智能'
        }
        ],
        childContent2: [{
          id: '1.11',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }, {
          id: '1.21',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '精英'
        }, {
          id: '1.31',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '较难'
        }, {
          id: '1.41',
          src: '../img/img.png',
          href: '#',
          content: '点击阿斯顿撒大多所多阿斯顿撒大',
          grade: '入门'
        }
        ]
      }
      ],
      lessonList: [{
        video: '../video/video.mp4',
        id: '1',
        href: '#',
        name: '前端开发'
      }, {
        video: '../video/video.mp4',
        id: '2',
        href: '#',
        name: 'web开发指南'
      }, {
        video: '../video/video.mp4',
        id: '3',
        href: '#',
        name: 'javaEE教程'
      }, {
        video: '../video/video.mp4',
        id: '4',
        href: '#',
        name: 'sqlserver教程'
      }]
    };
  },
  mounted: function () {
    var _this = this;
    _this.$nextTick(function () {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/recommendList',
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 数据
            _this.recommendList = response.data.pagedata;
            _this.total = _this.recommendList.length;
            _this.allLesson = _this.sizeChange;
          }
        }
      });
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/imgList',
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 数据
            _this.imgList = response.data.pagedata;
          }
        }
      });
    });
  },
  methods: {
    videoClick: function (video, times, index, id, tit) {
      var _this = this;
      times++;
      _this.videosrc = video;
      _this.home = false;
      _this.video = true;
      _this.search = false;
      _this.categories = false;
      _this.contact = false;
      _this.activeIndex = '';
      _this.videoName = tit;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/timeschange',
        dataType: 'json',
        data: { times: times, id: id },
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 数据
            _this.recommendList[index].times = times;
          }
        }
      });
    },
    registShow: function () {
      var _this = this;
      var msgEl = document.getElementById('msg1');
      var login = document.getElementsByClassName('yu-loginBox')[1];
      var cover = document.getElementsByClassName('cover')[0];
      var close = document.getElementsByClassName('login_close')[1];
      login.style.display = 'block';
      cover.style.display = 'block';
      cover.style.height = document.body.scrollHeight + 'px';

      login.style.left = (document.body.scrollWidth - login.scrollWidth) / 2 + 'px';
      login.style.top = document.documentElement.clientHeight / 4 + 'px';
      close.addEventListener('click', function () {
        login.style.display = 'none';
        cover.style.display = 'none';
        _this.values.password = '';
        _this.values.username = '';
        msgEl.innerText = '';
        msgEl.style.display = 'none';
      });
    },
    submitForm: function (ref) {
      var _this = this;
      // Ajax请求
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/submit',
        data: _this.ruleForm,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 跳转页面
            _this.ruleForm = { name: '', address: '', website: '', subject: '', type: [], description: '' };
          } else {
            return;
          }
        }
      });
    },
    resetForm: function (ref) {
      var _this = this;
      // _this.$refs[ref].resetFields();
      _this.ruleForm = { name: '', address: '', website: '', subject: '', type: [], description: '' };
    },
    handleSizeChange: function (val) {
      var _this = this;
      _this.pageconut = val;
      _this.allLesson = _this.sizeChange;
    },
    handleCurrentChange: function (val) {
      var _this = this;
      _this.currentPage = val;
      _this.allLesson = _this.currentchange;
    },
    registFn: function () {
      var nameEl = document.getElementById('username1');
      var pwdEl = document.getElementById('password1');
      var msgEl = document.getElementById('msg1');
      // 判斷用戶名為空
      if (nameEl.value == '') {
        msgEl.innerText = '请输入用户名!';
        msgEl.style.display = 'block';
        nameEl.focus();
        return;
      }
      // 判斷密碼為空
      if (pwdEl.value == '') {
        msgEl.innerText = '请输入密码!';
        msgEl.style.display = 'block';
        pwdEl.focus();
        return;
      }
      msgEl.style.display = 'none';
      // 設置API參數
      var data = {
        username: nameEl.value,
        password: pwdEl.value,
        grantType: 'password'
      };
      // Ajax请求
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/regist',
        data: data,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 跳转页面
            var msg = response && response.message ? response.message : '注册成功';
            msgEl.innerText = msg;
            msgEl.style.display = 'block';
          } else {
            var msg = response && response.message ? response.message : response.data.msg;
            msgEl.innerText = msg;
            msgEl.style.display = 'block';
          }
        }
      });
    },
    // 登錄校驗用戶密碼
    loginFn: function () {
      var _this = this;
      var nameEl = document.getElementById('username');
      var pwdEl = document.getElementById('password');
      var msgEl = document.getElementById('msg');
      // 判斷用戶名為空
      if (nameEl.value == '') {
        msgEl.innerText = '请输入用户名!';
        msgEl.style.display = 'block';
        nameEl.focus();
        return;
      }
      // 判斷密碼為空
      if (pwdEl.value == '') {
        msgEl.innerText = '请输入密码!';
        msgEl.style.display = 'block';
        pwdEl.focus();
        return;
      }
      msgEl.style.display = 'none';
      // 設置API參數
      var data = {
        username: nameEl.value,
        password: pwdEl.value,
        grantType: 'password'
      };
      // Ajax请求
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/login',
        data: data,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 跳转页面
            var login = document.getElementsByClassName('yu-loginBox')[0];
            var cover = document.getElementsByClassName('cover')[0];
            login.style.display = 'none';
            cover.style.display = 'none';
            msgEl.style.display = 'none';
            _this.isShow = true;
            _this.form.username = data.username;
            // window.location.reload();
          } else {
            var msg = response && response.message ? response.message : '用户名或密码不正确！';
            msgEl.innerText = msg;
            msgEl.style.display = 'block';
          }
        }
      });
    },
    handleSelect: function (key, keyPath) {
      var _this = this;
      if (key == '1') {
        _this.home = true;
        _this.video = false;
        _this.search = false;
        _this.categories = false;
        _this.contact = false;
      }
      if (key == '2') {
        _this.home = false;
        _this.video = false;
        _this.search = true;
        _this.categories = false;
        _this.contact = false;
      }
      if (key == '3') {
        _this.categories = true;
        _this.home = false;
        _this.video = false;
        _this.search = false;
        _this.contact = false;
      }
      if (key == '4') {
        _this.categories = false;
        _this.home = false;
        _this.video = false;
        _this.search = false;
        _this.contact = true;
      }
      if (key == '5') {
        var msgEl = document.getElementById('msg');
        var login = document.getElementsByClassName('yu-loginBox')[0];
        var cover = document.getElementsByClassName('cover')[0];
        var close = document.getElementsByClassName('login_close')[0];
        login.style.display = 'block';
        cover.style.display = 'block';
        cover.style.height = document.body.scrollHeight + 'px';

        login.style.left = (document.body.scrollWidth - login.scrollWidth) / 2 + 'px';
        login.style.top = document.documentElement.clientHeight / 4 + 'px';
        close.addEventListener('click', function () {
          login.style.display = 'none';
          cover.style.display = 'none';
          _this.values.password = '';
          _this.values.username = '';
          msgEl.innerText = '';
          msgEl.style.display = 'none';
        });
      }
      if (key == '6') {
        var msgEl = document.getElementById('msg1');
        var login = document.getElementsByClassName('yu-loginBox')[1];
        var cover = document.getElementsByClassName('cover')[0];
        var close = document.getElementsByClassName('login_close')[1];
        login.style.display = 'block';
        cover.style.display = 'block';
        cover.style.height = document.body.scrollHeight + 'px';

        login.style.left = (document.body.scrollWidth - login.scrollWidth) / 2 + 'px';
        login.style.top = document.documentElement.clientHeight / 4 + 'px';
        close.addEventListener('click', function () {
          login.style.display = 'none';
          cover.style.display = 'none';
          _this.values.password = '';
          _this.values.username = '';
          msgEl.innerText = '';
          msgEl.style.display = 'none';
        });
      }
      if (key == '7-1') {
        _this.dialogVisible = true;
        // Ajax请求
        $.ajax({
          type: 'POST',
          url: 'http://localhost:8080/esonline/person',
          data: { username: _this.form.username },
          dataType: 'json',
          // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
          success: function (response, message, xhr) {
            // 回调的code为0
            if (response && response.code == '0' && message == 'success') {
              // 数据加载
              _this.form = deepClone(response.data.persondata, _this.form);
            } else {
              return;
            }
          }
        });
      }
      if (key == '7-2') {
        _this.form = {};
        _this.isShow = false;
      }
    },
    cancelFn: function () {
      var _this = this;
      _this.dialogVisible = false;
    },
    searchFn: function () {
      var _this = this;
    },
    confirmFn: function () {
      var _this = this;
      // Ajax请求
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/esonline/confirm',
        data: _this.form,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // 跳转页面
            _this.dialogVisible = false;
          } else {
            return;
          }
        }
      });
    }
  },
  // watch: {
  //   pageconut: function () {
  //     var _this = this;
  //     _this.allLesson = _this.sizeChange;
  //   }
  // },
  computed: {
    sizeChange: function () {
      var _this = this;
      return _this.recommendList.filter(function (element, index, self) {
        if (index < _this.pageconut) {
          return true;
        } else {
          return false;
        }
      });
    },
    currentchange: function () {
      var _this = this;
      return _this.recommendList.filter(function (element, index, self) {
        if (index >= ((_this.currentPage - 1) * _this.pageconut) && index < (_this.currentPage * _this.pageconut)) {
          return true;
        }
      });
    }
  }
});
// 深度克隆
function deepClone(obj, result) {
  var oClass = isClass(obj);
  // 确定result的类型
  if (oClass === 'Object') {
    result = {};
  } else if (oClass === 'Array') {
    result = [];
  } else {
    return obj;
  }
  for (var key in obj) {
    var copy = obj[key];
    if (isClass(copy) == 'Object') {
      result[key] = deepClone(copy);// 递归调用
    } else if (isClass(copy) == 'Array') {
      result[key] = deepClone(copy);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}
// 返回传递给他的任意对象的类
function isClass(o) {
  if (o === null) {
    return 'Null';
  }
  if (o === undefined) {
    return 'Undefined';
  }
  return Object.prototype.toString.call(o).slice(8, -1);
}