var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var span = document.querySelector("span");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

body.onload = function() {
	css.textContent = "Pick your colors to get your gradient";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", css.textContent)
    alert("Saved to clipboard. Paste your gradient in your web project to use it.");
  }
});