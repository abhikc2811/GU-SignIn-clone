document.addEventListener('DOMContentLoaded', function() {
  // Initialize captcha on page load
  document.getElementById('captchaText').textContent = generateCaptcha();
});

function generateCaptcha() {
  var captcha = '';
  var characters = '0123456789';
  for (var i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Function to refresh captcha
function refreshCaptcha(event) {
  event.preventDefault(); // Prevents the default behavior of the button
  var captchaText = document.getElementById('captchaText');
  captchaText.textContent = generateCaptcha();
}

