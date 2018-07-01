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
### Node.js 搭建在线聊天室
Node.js Express
- 描述

### To-Do List
React
- 描述达飞

### Canvas 画板
- 描述

### 在线动态简历
JavaScript CSS
- 描述

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
.wrapper {
  width: 100%;
  min-width: 960px;
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

/* 让代码框腾出一些的位置给我的简历 */
#code_body {
  width: 35%;
}
/* 准备一个白板 */
#paper {
  width: 65%;
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
  font-family: MicrosoftYaHei;
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
      })
    })
  })
})
