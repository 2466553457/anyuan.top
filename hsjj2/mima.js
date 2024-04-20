function validateForm() {
  var captcha = document.getElementById("captcha").value;
  var generatedCaptcha = document.getElementById("generatedCaptcha").innerText;

  if (captcha === generatedCaptcha) {
    // 跳转到另一个页面
    window.location.href = "hsjj3309.html";
  } else {
    alert("验证码错误，请重新输入！");
  }

  return false; // 防止表单提交
}

function generateCaptcha() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var captcha = "";

  for (var i = 0; i < 4; i++) {
    captcha += `<span class="captcha-char">${chars.charAt(
      Math.floor(Math.random() * chars.length)
    )}</span>`;
  }

  document.getElementById("generatedCaptcha").innerHTML = captcha;
}
