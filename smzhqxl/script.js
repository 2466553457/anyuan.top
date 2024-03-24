// 获取页面元素
const passwordPage = document.getElementById("password-page");
const contentPage = document.getElementById("content-page");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const goToNextPageButton = document.getElementById("go-to-next-page-button");

// 设置密码
const password = "ay2720";

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
    window.location.href = "2b7429f9.html";
  } else {
    // 如果密码错误，则弹出警告框
    alert("密码错误，请重新输入！");
  }
});

// // JavaScript
// function login() {
//   const inputPassword = document.getElementById("password-input").value;

//   // 在这里编写判断密码是否正确的逻辑
//   // 例如，如果密码是 "mypassword"，则可以使用以下逻辑来进行判断：
//   if (inputPassword === "ay2720") {
//     // 密码正确，跳转到指定页面
//     window.location.href = "2b7429f9.html";
//   } else {
//     // 密码不正确，执行相应的操作
//     alert("密码不正确，请重新输入！");
//   }
// }

// // 清除localStorage中的数据,最好不要使用，使用后悔，责任一概不担！
// localStorage.clear();
