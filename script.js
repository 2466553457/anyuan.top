function login() {
  // Redirect the user to the login page
  window.location.href = "denglu.html";
}

// Get the username and email from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const email = urlParams.get("email");

// Update the text on the page with the username and email
document.getElementById("username").textContent = username;
document.getElementById("email").textContent = email;
