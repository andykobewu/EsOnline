var app = new Vue({
  el: '#homepage',
  data: function () {
    return {
      videosrc: '',
      ruleForm: { name: '', address: '', website: '', subject: '', type: [], desc: '' },
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
      imgList: [{
        id: '1',
        src: '../img/img.png',
        href: '#'
      }, {
        id: '2',
        src: '../img/img.png',
        href: '#'
      }, {
        id: '3',
        src: '../img/img.png',
        href: '#'
      }, {
        id: '4',
        src: '../img/img.png',
        href: '#'
      }],
      recommendList: [{
        id: '1',
        video: '../video/video.mp4',
        src: '../img/img.png',
        tit: 'Android攻城狮',
        desc: '移动设备市场份额第一'
      }],
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
  methods: {
    videoClick: function (video) {
      var _this = this;
      _this.videosrc = video;
      _this.home = false;
      _this.video = true;
      _this.search = false;
      _this.categories = false;
      _this.contact = false;
      _this.activeIndex = '';
    },
    submitForm: function (ref) {
      var _this = this;
    },
    resetForm: function (ref) {
      var _this = this;
      // _this.$refs[ref].resetFields();
      _this.ruleForm = { name: '', address: '', website: '', subject: '', type: [], desc: '' };
    },
    handleSizeChange: function (val) {

    },
    handleCurrentChange: function (val) {

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
        url: backend.uaaService + '/oauth/token',
        header: headers,
        data: data,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // response 和 response.access_token均为true  那么data=response.access_token
            var data = response && response.access_token;
            // 提交token,把token放在当前回话的sessionStorage中
            yufp.service.putToken(data);
            // 跳转页面
            yufp.session.loadUserSession(function () {
              yufp.router.to('frame');
            });
          } else {
            var msg = response && response.message ? response.message : '登录失败，请联系系统管理员！';
            msgEl.innerText = msg;
            msgEl.style.display = 'block';
          }
        }
      });
    },
    // 登錄校驗用戶密碼
    loginFn: function () {
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
        url: backend.uaaService + '/oauth/token',
        header: headers,
        data: data,
        dataType: 'json',
        // 第一个参数为服务器返回的信息，第二个为ajax发送状态，第三个为自身发送的XmlHttpRequest
        success: function (response, message, xhr) {
          // 回调的code为0
          if (response && response.code == '0' && message == 'success') {
            // response 和 response.access_token均为true  那么data=response.access_token
            var data = response && response.access_token;
            // 提交token,把token放在当前回话的sessionStorage中
            yufp.service.putToken(data);
            // 跳转页面
            yufp.session.loadUserSession(function () {
              yufp.router.to('frame');
            });
          } else {
            var msg = response && response.message ? response.message : '登录失败，请联系系统管理员！';
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
    },
    cancelFn: function () {

    }
  }
});