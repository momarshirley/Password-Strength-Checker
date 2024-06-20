var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

function inputPassword() {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 8) {
    str.innerHTML = "weak!!!";
    pass.style.borderColor = "red";
    msg.style.color = "red";
  } else if (pass.value.length >= 8 && pass.value.length < 14) {
    str.innerHTML = "medium!";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pass.value.length >= 14) {
    str.innerHTML = "strong.";
    pass.style.borderColor = "green";
    msg.style.color = "green";
  }
}

pass.addEventListener("input", inputPassword);
