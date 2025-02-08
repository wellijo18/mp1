document.addEventListener("DOMContentLoaded", function () {
  
  function showRes(res) {
      let output = document.getElementById("output");
      output.innerText = res;
      
      let colors = ["black", "red"];
      for (let i = 0; i < colors.length; i++) {
          output.style.color = res < 0 ? colors[1] : colors[0];
      }
  }

  function multiply() {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      if (isNaN(n1) || isNaN(n2)) {
          showRes("Only numbers");
          return;
      }
      showRes(n1 * n2);
  }
  document.getElementById("mul").addEventListener("click", multiply);

  function divide() {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      if (isNaN(n1) || isNaN(n2)) {
          showRes("Only numbers");
          return;
      }
      if (n2 === 0) {
          showRes("Second value can't be zero");
          return;
      }
      showRes(n1 / n2);
  }
  document.getElementById("div").addEventListener("click", divide);

  function add() {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      if (isNaN(n1) || isNaN(n2)) {
          showRes("Only numbers");
          return;
      }
      showRes(n1 + n2);
  }
  document.getElementById("add").addEventListener("click", add);

  function subtract() {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      if (isNaN(n1) || isNaN(n2)) {
          showRes("Only numbers");
          return;
      }
      showRes(n1 - n2);
  }
  document.getElementById("sub").addEventListener("click", subtract);

  function pow() {
      let n1 = parseFloat(document.getElementById("n1").value);
      let n2 = parseFloat(document.getElementById("n2").value);
      if (isNaN(n1) || isNaN(n2)) {
          document.getElementById("output").innerText = "Only numbers";
          return;
      }
      let res = 1;
      for (let i = 0; i < n2; i++) {
          res *= n1;
      }
      showRes(res);
  }
  document.getElementById("pow").addEventListener("click", pow);

  document.getElementById("reset").addEventListener("click", function () {
      document.getElementById("n1").value = "";
      document.getElementById("n2").value = "";
      showRes("");
  });
});
