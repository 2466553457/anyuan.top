function login(event) {
  event.preventDefault(); // 防止表单提交

  // TODO: 在这里添加您的用户验证逻辑

  setTimeout(function () {
    location.href = "chenggong.html"; // 填写跳转目标网页的 URL
  }, 1000); // 延迟3秒后跳转
}

document.getElementById("login-btn").addEventListener("click", login);
