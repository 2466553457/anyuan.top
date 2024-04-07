// 获取页面元素
const passwordPage = document.getElementById("password-page");
const contentPage = document.getElementById("content-page");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const goToNextPageButton = document.getElementById("go-to-next-page-button");

// 设置密码
const password = "ay5964";

// 监听密码输入表单的提交事件
passwordForm.addEventListener("submit", function (event) {
  // 阻止表单默认的提交行为
  event.preventDefault();

  // 获取输入的密码
  const inputPassword = passwordInput.value;

  // 验证密码是否正确
  if (inputPassword === password) {
    // 如果密码正确，则显示内容页面并隐藏密码页面
    contentPage.classList.remove("hidden");
    passwordPage.classList.add("hidden");

    // 自动跳转到下一个页面
    window.location.href = "wqyl0173.html";
  } else {
    // 如果密码错误，则弹出警告框
    alert("密码错误，请重新输入！");
  }
});

// // 检查localStorage中的标志
// var hasRedirected = localStorage.getItem("hasRedirected");

// // 如果localStorage中的标志不存在或者为false，则进行跳转
// if (!hasRedirected) {
//   // 设置localStorage标志为true
//   localStorage.setItem("hasRedirected", true);
// } else {
//   // 如果已经跳转过了，则直接跳转到下一个页面
//   window.location.href = "49df6c88.html";
// }
// // 清除localStorage中的数据,最好不要使用，使用后悔，责任一概不担！
// // localStorage.clear();
