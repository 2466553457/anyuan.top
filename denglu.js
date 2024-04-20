// 固定的账号和密码
const fixedUsername = "aywzxkyfzs.top";
const fixedPassword = "aywzdlmm";

function validateLogin() {
  // 获取输入的账号和密码
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let errorMessage = "";

  // 检查输入的账号和密码是否为空
  if (username === "") {
    errorMessage = "您不能登录！";
  }

  if (password === "") {
    errorMessage = "您不能登录！";
  }

  // 如果有错误消息则显示
  if (errorMessage !== "") {
    document.getElementById("error-message").innerText = errorMessage;
  } else {
    // 检查输入的账号和密码是否与固定的账号和密码匹配
    if (username === fixedUsername && password === fixedPassword) {
      document.getElementById("error-message").innerText = "";
      // 保存登录状态到本地存储
      localStorage.setItem("isLoggedIn", true);

      // 跳转到指定的页面
      window.location.href = "http://w2995209639.3vzhuji.cc/index2.html"; // 请将链接替换为你希望跳转的目标页面的实际链接
    } else {
      document.getElementById("error-message").innerHTML =
        "用户名或密码错误，请重新输入！";
    }
  }
}

// 页面加载时检查本地存储中的登录状态
window.onload = function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    window.location.href = "index2.html"; // 请将链接替换为你希望跳转的目标页面的实际链接
  }
};
