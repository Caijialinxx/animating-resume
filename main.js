let resume = `# 蔡嘉琳
137-xxxx-6136 | caijialinxx@foxmail.com | 深圳
Wechat：137xxxx6136 | Github: https://github.com/Caijialinxx
应届生 | 前端工程师

## 专业技能
- 精通 HTML 5、CSS 3 及 JavaScript，掌握 HTTP 的基础
- 有 React 库的开发经历
- 有 Node.js 搭配 Express 框架的开发经历
- MVC、MVVM、组件化思想
- 掌握 Webpack
- 掌握 SaSS、LeSS 的使用

## 项目经验
### [动态简历](#)
JavaScript CSS
- 主要技术栈： JavaScript 、 CSS
- 使用 JS 和 CSS 模拟一个 markdown 简历的制作过程
- JS 的具体实现中使用到了大量了 Promise 对象
- CSS 采用 Flex 布局

### To-Do List
React
- 主要技术栈：React
- [版本一](https://caijialinxx.github.io/todo-react/build/)：实现用户登录和注册功能，使用第三方服务 LeanCloud 实现数据库存储数据
- [版本二](https://caijialinxx.github.io/todo/build/)：无登录注册功能，使用 localStorage 存储数据
- 功能：增加新的 todo 、标记 todo 的完成状态、移动及删除已有 todo
- 组件化思想：分离各个拥有独立功能的组件，使项目和代码结构清晰，

### Node.js 搭建在线聊天室
Node.js Express
- 主要技术栈： Node.js 、 Express 框架
- 功能：使用唯一昵称登录、添加好友、加入/创建群聊、发送消息（文本、表情、文件）等

### [Canvas 画板](https://caijialinxx.github.io/jirengu-homework/canvas/)
JavaScript CSS
- 主要技术栈： JavaScript 、 CSS
- 功能：改变笔触的颜色和粗细、橡皮擦、一键清空、保存至本地功能
- 兼容触屏设备（触屏设备直接使用截屏功能）

### [轮播动画](https://caijialinxx.github.io/jirengu-homework/slides/)
jQuery CSS
- 主要技术栈： jQuery 、 CSS
- 功能：切换至上一张、切换至下一张、圆点导航、自动循环轮播、鼠标悬停暂定播放
- jQuery 的操作（DOM 操作、鼠标事件）
- “状态机”原理切换图片，呈现出轮播的效果


## 教育经历
### 广东第二师范学院
2014/9 - 2018/6
- GPA：X.X / 4.0（专业前X%）
- 荣誉：校二、三奖学金、优秀学生、优秀学生干部（2014-2015、2016-2017）
- 相关课程：网络应用开发、数据结构与算法、数据库系统原理、计算机网络、数字通信原理、网络安全等
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
  background: #fff3dd;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #fff;
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
  background: #fff;
  margin: 16px;
  overflow: auto;
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

let code_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  padding: 0 32px;
  font-size: 14px;
}
#paper ul {
  padding-left: 20px;
}
#paper li, #paper p {
  white-space: pre-wrap;
  word-break: break-word;
}
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #666;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
}

/* 然后，缩小“专业技能”中列表的行间距 */
#skills ul {
  margin: 20px 0;
}
#skills li {
  margin: 10px 0;
}

/* 
 * 调整“项目经验”和
 * “教育经历”中列表的间距
 */
#works ul, #education ul {
  margin: 10px 0;
}
#works li, #education li {
  margin-bottom: 8px;
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
      writeCode(code_resume, code_ready + code_marked).then(() => {
        $('#information').append('<img src="./avatar.png" alt="头像" />')
      }).then(() => {
        writeCode(code_photo, code_ready + code_marked + code_resume).then(() => {
          setTimeout(() => {
            $('#code_body').css({ 'width': '25%',  })
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