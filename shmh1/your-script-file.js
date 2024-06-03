// 定义一个名为 theme 的变量来保存主题
let theme = "light";

// 定义切换主题的函数 switchTheme
function switchTheme() {
  // 获取 body 元素
  const body = document.querySelector("body");
  // 如果当前主题为 light，则切换到 dark
  if (theme === "light") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    theme = "dark";
    // 如果当前主题为 dark，则切换到 light
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    theme = "light";
  }
}

// 在 switchTheme 函数中添加以下代码
// 将主题状态保存到浏览器本地存储中
localStorage.setItem("theme", theme);

// 在DOMContentLoaded事件中添加以下代码
// 从浏览器本地存储中读取主题状态
if (localStorage.getItem("theme") === "dark") {
  switchTheme();
}
