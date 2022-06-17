// User Interface Logic

function hideResults() {
  document.getElementById("python").style.display = "none";
  document.getElementById("javascript").style.display = "none";
  document.getElementById("ruby").style.display = "none";
}

window.onload = function(){
  hideResults();
  document.getElementById("form").reset();

  document.querySelector("form").onsubmit = function(event) {
    hideResults();
    event.preventDefault();

  const endValue = document.querySelector("input[name=end]:checked").value;
  const eyeValue = document.querySelector('input[name="eye"]:checked').value;
  const fluffValue = document.querySelector('input[name="fluff"]:checked').value;
  const functionValue = document.querySelector('input[name="function"]:checked').value;
  const toonValue = document.querySelector('input[name="toon"]:checked').value;
  const viewValue = document.querySelector('input[name="view"]:checked').value;
  const dudeValue = document.querySelector('input[name="dude"]:checked').value;
  const peopleValue = document.querySelector('input[name="people"]:checked');
  const ocdValue = document.querySelector('input[name="ocd"]:checked').value;

  if (endValue === "option2" && eyeValue === "option2" && functionValue === "option2" && viewValue === "option1" && peopleValue === "option2") {
    document.getElementById("python").style.display = "block;";
  }
  }
}
