let resume = `# 蔡嘉琳
137xxxxxxxx | caijialinxx@foxmail.com | 深圳
Github: https://github.com/Caijialinxx
Blog: https://caijialinxx.github.io
前端开发

## 专业技能
- 掌握 HTML5 及 CSS3 ，熟悉传统布局、 Flex 布局、移动端适配等，有较好的审美及保证设计稿还原度。使用 Scss / Less 开发 CSS 
- 掌握 JavaScript ，掌握原型、原型链、闭包、面向对象等。了解 ES6 部分新特性
- 掌握 React 及其相关库的使用，理解生命周期、组件通信、异步更新、 Hooks 、虚拟 DOM 、 Diff 算法等
- 使用 TypeScript 开发，理解接口、常用类型、可选链、空值合并运算符等
- Vue 结合相关库的开发经验，掌握组件及组件间数据传递的使用、响应式原理、路由等
- Git 的使用，代码仓库协同工作的能力、 npm 发布等经验
- React Native 、原生小程序等移动端开发经验
- 理解 MVC 、 MVVM 思想，了解 HTTP 基础
- 使用 webpack 打包项目的经验，了解其资源管理的方法，如 css-loader 、 file-loader 等
- 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。曾使用原生 JavaScript 封装简易版的 $.ajax()

## 项目经验
### CUI
[Try it](https://caijialinxx.github.io/ui-demo/) | [View source](https://github.com/Caijialinxx/ui-demo)
- 关键词：\`UI 组件库\`、\`React Hooks\`、\`TypeScript\`、\`npm\`、\`webpack\`、\`CircleCi\`
- 描述：个人独立开发的 React UI 组件库，使用 React Hooks + TypeScript 开发，并已发布到 npm 中。由此掌握了 webpack 打包、 npm 发布流程、 CircleCi 自动化持续集成等。其中遇到的一个问题记录在了博客中——[从 npm 引入 React Hooks 轮子库报错 Minified React error#321 的解决方法](https://caijialinxx.github.io/2019/11/20/fix-react-error-321-by-webpack-externals/)。

### 简历生成器
[Try it](https://caijialinxx.github.io/animating-resume/) | [View source](https://github.com/Caijialinxx/animating-resume)
- 关键词：\`JavaScript\`、\`Promise\`、\`变速\`、\`过渡动画\`、\`盒阴影\`
- 描述：该项目实现将一个 Markdown 简历转成可下载的 PDF 简历。使用原生 JS 开发， Promise 处理异步链式操作（各个步骤的跳转衔接），利用 CSS3 实现过渡、动画、阴影和弹性布局等。

### 炫主页
[Try it](https://caijialinxx.github.io/resume/) | [View source](https://github.com/Caijialinxx/resume)
- 关键词：\`jQuery\`、\`CSS3 过渡动画\`、\`组件化思想\`、\`MVC 思想\`、\`媒体查询\`、\`Sticky\`
- 描述：此项目是本人的一个信息介绍页，包含基础信息、技能、项目展示以及留言板功能。有大量精美的动画，例如滚动时的导航栏及模块的浮起、导航栏 hover 动画、响应式设计等。

### 幻灯片放映室
[Try it](https://caijialinxx.github.io/Slides/) | [View source](https://github.com/Caijialinxx/Slides)
- 关键词：\`jQuery\`、\`Loop模式\`、\`缩略图模式\`、\`Rem\`、\`适配移动端\`、\`ES6\`
- 描述：本项目展示了两种不同风格的轮播，功能有上一张、下一张、可点击的原点/缩略图导航、自动循环播放。使用了 Rem 单位，以及适配移动端。

### 涂鸦板
[Try it](https://caijialinxx.github.io/Canvas/) | [View source](https://github.com/Caijialinxx/Canvas)
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 描述：使用 HTML5 的 Canvas 元素及其相关 API ，实现支持多指同时画图（可选色/粗细）、橡皮擦、一键清空、保存至本地的功能。

## 工作经历
### 深圳市亿兆互联技术有限公司
2020/3 - 至今
- 职位：Web前端开发
- 主要技术：\`Vue\`、\`Vue Router\`、\`Vuex\`
- 工作内容：开发和维护智能照明控制系统，独立承担太阳能智能灯控系统中高德地图模块的开发。快速定位和解决 Bug ，针对可优化的地方主动提供优化方案并执行。

### 深圳市芥菜种科技有限公司
2019/2 - 2019/5
- 职位：Web前端开发
- 主要技术：\`React\`、\`React Router\`、\`Mobx\`
- 工作内容：开发智能英语学习平台。负责中后台 1.1 版本的所有更新和优化；To C 系统中负责 UI 组件的开发供前端调用，以及数学学习模块的更新维护。

## 教育经历
### 广东第二师范学院
2014/9 - 2018/6
- 专业学历：计算机科学与技术 大学本科
- GPA：3.4 / 4.0
- 荣誉：校二、三奖学金、优秀学生（2014-2015、2016-2017共两学年）、优秀学生干部（2014-2015、2016-2017共两学年）
`

let code_ready = `/*
 * 嗨，我是蔡嘉琳。
 * 我想用代码给你展示一下我的个人简历～
 * 灵感来自：http://strml.net
 * 
 * 那么，我要开始啦...
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
#options {
  width: 32%;
}
/* 准备一个白板 */
#paper {
  flex: 1;
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
#jobs > .single {
  margin-bottom: 6px;
}

/* 调整“实习经历”和“教育经历”中时间的位置 */
#jobs > .single, #education > .single, #works > .single {
  position: relative;
}
#jobs p, #education p, #works p {
  position: absolute;
  right: 0px;
  top: 6px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information .avatar {
  width: 100px;
  position: absolute;
  right: 0px;
  top: 0px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *   —— 蔡嘉琳 2019/01 *^_^*
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    $('#skip_inputResume').remove()
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 1, duration = 80
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = '开小车车快点吧~'
      duration = 70
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = '太废话了，我要最快！'
      duration = 30
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = '我眼花了！慢一点~'
      duration = 0
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}
function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="works"></div>', '<div id="jobs"></div>', '<div id="education"></div>')
  
  // 「基本信息」
  $('#information').append($('h1'), $('p').first())

  // 「专业技能」
  const skills_header = $('h2:contains("技能")')
  $('#skills').append(skills_header, skills_header.next('ul')[0])

  // 「教育经历」
  $('#education').append($('h2:contains("教育")'), $('<div class="single"></div>').append($('h3:contains("学院")'), $('p').last(), $('ul').last()))

  // 「工作经历」
  $('#jobs').append($('h2:contains("工作")'))
  $('h3:contains("公司")').each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#jobs')
  })

  // 「项目经验」模块
  $('#works').append($('h2:contains("项目")'))
  const project_title_array = $('#paper > h3')    // 剩余的h3就是项目名
  project_title_array.each((index, element) => {
    $('<div class="single"></div>')
      .append($(element), $(element).next('p')[0], $(element).next('p').next('ul')[0])
      .appendTo('#works')
  })

  // 「小程序」
  // $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}