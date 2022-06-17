// User Interface Logic

function hideResults() {
  document.getElementById("python").style.display = "none";
  document.getElementById("javascript").style.display = "none";
  document.getElementById("ruby").style.display = "none";
}

window.onload = function(){
  hideResults();
  document.getElementById("form").reset();
}
