// 获取页面元素
const passwordPage = document.getElementById("password-page");
const contentPage = document.getElementById("content-page");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const goToNextPageButton = document.getElementById("go-to-next-page-button");

// 设置密码
const password = "ay2475";

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
    window.location.href = "csmnq5121.html";
  } else {
    // 如果密码错误，则弹出警告框
    alert("密码错误，请重新输入！");
  }
});
