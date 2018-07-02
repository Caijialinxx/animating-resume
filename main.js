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
/* 让 wrapper 里的元素 flex 布局 */
.wrapper {
  min-width: 1100px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  margin: 16px;
  padding: 16px;
  overflow: auto;
  border: 1px solid #fff;
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

/* 现在开始写简历啦！ */

/* 让代码框腾出一些的位置给我的简历框 */
#code_body {
  width: 30%;
}
/* 准备一个白板 */
#paper {
  width: 70%;
  background: #fff;
  margin: 16px;
  padding: 16px;
  white-space: pre;
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
  font-size: 14px;
  line-height: 24px;
}
#paper ul {
  margin: -20px 0px -10px 0px;
  padding-left: 20px;
}
#paper p, #paper li {
  margin: -8px 0px;
  white-space: pre-wrap;
  word-break: break-word;
}
#paper h1 {
  font-size: 22px;
  margin-top: 10px;
  text-align: center;
}
#paper h2 {
  font-size: 16px;
  margin-bottom: -8px;
  padding: 4px 0;
  border-bottom: 1px solid #666;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin-bottom: 12px;
}

/* 接下来是精细的调整，需要使用 JS */

`

let code_photo = `
/* 然后把我的头像放在个人信息里 */
#paper img {
  position: absolute;
  top: 16px;
  right: 16px;
}
/* 这还得让我的简历框相对定位 */
#paper {
  position: relative;
}
/* 
 * 好啦，我的头像出来啦~
 * 期待这张面孔出现在您的面试中
 * 
 *                     *^_^*
 */
`

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
    }, 1)
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

writeCode(code_ready, '').then(() => {
  writeResume().then(() => {
    writeCode(code_marked, code_ready).then(() => {
      paper.innerHTML = marked(resume)
    }).then(() => {
      paper.scrollTop = 0
      writeCode(code_resume, code_ready + code_marked).then(() => {
        $('p').eq(0).css({ 'text-align': 'center' })
        $('p').eq($('p').length - 1).css({ 'float': 'right', 'margin-top': '-36px' })
        $('ul').eq($('ul').length - 1).css({ 'margin-top': '-40px' })
      }).then(() => {
        writeCode('/* 接下来添加个头像吧！ */', code_ready + code_marked + code_resume).then(() => {
          $('#paper').append('<img src="./avatar.png" width="100" height="140" />')
        }).then(() => {
          writeCode(code_photo, code_ready + code_marked + code_resume + '/* 接下来添加个头像吧！ */')
        })
      })
    })
  })
})
