document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      document.getElementById("fullname").value = "";
      document.getElementById("message").value = "";
  });
});
