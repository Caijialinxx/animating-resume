let resume = `# 蔡嘉琳
137-xxxx-6136 | caijialinxx@foxmail.com | 深圳
Wechat：137xxxx6136 | Github: https://github.com/Caijialinxx
应届生 | 前端工程师

## 专业技能
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 语义化标签如 canvas 、 nav 及 WebStorage API 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
- React & React Native
    - 有 React 的开发经历，理解 JSX 、组件、 props 、 state 及生命周期等
    - 有 React Native 移动端开发的经历，掌握原生 UI 组件、 React Navigation 、动画等 API 的使用
- 移动端开发
    - 会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面
- Node.js
    - 搭配 Express 和 Socket.IO 开发在线聊天室，并已将项目部署上线
- Webpack
    - 有使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等
- 其他
    - 掌握 JQuery 的使用
    - 掌握 Scss 、 Less 的使用
    - 理解 MVC 、 MVVM 思想
    - 掌握 HTTP 基础

## 项目经验
### 简历生成器
- 关键词：\`JavaScript\`、\`CSS3\`、\`Promise\`、\`Markdown\`
- 源码链接：https://github.com/Caijialinxx/animating-resume/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/animating-resume/
- 描述：该项目实现了一个 Markdown 简历的制作过程，在原生 JS 中使用 Promise 处理异步操作，利用 CSS3 实现过渡、动画、阴影和弹性布局等。

### 极简清单
- 关键词：\`React\`、\`React Native\`、\`组件化思想\`、\`3D 转换\`、\`动画\`、\`渐变\`、\`内外阴影\`
- 源码链接：[PC 端源码(React)](https://github.com/Caijialinxx/todo-react) [移动端源码(React Native)](https://github.com/Caijialinxx/todo-mobile)
- 预览链接：[PC 端预览(React)](https://caijialinxx.github.io/todo-react/build/) [移动端预览(React Native)](https://expo.io/@caijialinxx/ToDo)
- 描述：该项目由个人独立开发，功能有用户登录/注册、待办的添加/删除/标记完成状态。其中 PC 端还实现了移动待办、更换背景的功能，更换背景的按钮使用 3D 转换、动画、渐变和盒阴影等；移动端实现了顶部导航随键盘行为和滚动行为而缩放的功能。

### 彩色涂鸦
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 源码链接：https://github.com/Caijialinxx/Canvas/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/Canvas/
- 描述：使用 HTML5 的 Canvas 元素及其相关 API ，实现支持多指同时画图（可选色/粗细）、橡皮擦、一键清空、保存至本地的功能。

### 幻灯片放映室
- 关键词：\`jQuery\`、\`Loop模式\`、\`缩略图模式\`、\`Rem\`、\`适配移动端\`、\`ES6\`
- 源码链接：https://github.com/Caijialinxx/Slides/blob/master/main.js
- 预览链接：https://caijialinxx.github.io/Slides/
- 描述：本项目展示了两种不同风格的轮播，功能有上一张、下一张、可点击的原点/缩略图导航、自动循环播放。使用了 Rem 单位，以及适配移动端。

### 炫主页
- 关键词：\`jQuery\`、\`CSS3 过渡动画\`、\`组件化思想\`、\`MVC 思想\`、\`媒体查询\`
- 源码链接：https://github.com/Caijialinxx/resume
- 预览链接：https://caijialinxx.github.io/resume/
- 描述：此项目是本人的一个信息介绍页，包含基础信息、技能、项目展示以及留言板功能。有大量精美的动画，例如滚动时的导航栏及模块的浮起、导航栏 hover 动画、响应式设计等。

### 壹号聊天室
- 关键词：\`Node.js\`、\`Socket.IO\`、\`Express\`
- 源码链接：https://github.com/Caijialinxx/IMsystem
- 预览链接：https://arcane-mountain-17783.herokuapp.com/
- 描述：该项目后端使用 Node.js 实现一个在线聊天室，有登录、添加好友、单聊/群聊、发送消息（文本/表情/文件）等功能。使用 Express 实现路由功能，由个人独立开发，已部署到 Heroku 上。

## 教育经历
### 广东第二师范学院
2014/9 - 2018/6
- 专业学历：计算机科学与技术 大学本科
- GPA：3.6 / 4.0
- 荣誉：校二、三奖学金、优秀学生（2014-2015、2016-2017共两学年）、优秀学生干部（2014-2015、2016-2017共两学年）
- 相关课程：网络应用开发（PHP）、数据结构与算法、数据库系统原理、计算机网络等
`

let code_ready = `/*
 * 嗨，我是蔡嘉琳。
 */

/* 添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  margin: 16px;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效吧！
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#code_body {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  width: 68%;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}

/* 调整“教育经历”中时间的位置 */
#education {
  position: relative;
}
#education p {
  position: absolute;
  right: 0px;
  top: 40px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information img {
  width: 90px;
  position: absolute;
  right: 0px;
  top: -10px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *                     *^_^*
 *          —— 蔡嘉琳 2018/7
 */
`

writeCode(code_ready, '').then(() => {
  $('#paper').addClass('breathe').siblings().removeClass('breathe')
  writeResume().then(() => {
    $('#code_body').addClass('breathe').siblings().removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      $('#paper')[0].innerHTML = marked(resume)
      $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="works"></div>', '<div id="education"></div>')
      $('#information').append($('h1'), $('p').first())
      $('#skills').append($('h2:contains("技能")'), $('ul').first())
      $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
      $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
    }).then(() => {
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(() => {
        $('#information').append('<img src="./images/avatar.png" alt="头像" />')
      }).then(() => {
        writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
          setTimeout(() => {
            $('#code_body').css({ 'width': '25%', })
          }, 1000)
        })
      })
    })
  })
})


function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearInterval(intervalID)
        resolve.call(undefined)
      }
    }, 0)
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearInterval(intervalID)
        resolve.call(undefined)
      }
    }, 1)
  })
}