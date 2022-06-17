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

  let endValue = document.querySelector("input[name=end]:checked").value;
  let eyeValue = document.querySelector("input[name=eye]:checked").value;
  let fluffValue = document.querySelector("input[name=fluff]:checked").value;
  let whatValue = document.querySelector("input[name=what]:checked").value;
  let toonValue = document.querySelector("input[name=toon]:checked").value;
  let viewValue = document.querySelector("input[name=view]:checked").value;
  let dudeValue = document.querySelector("input[name=dude]:checked").value;
  let peopleValue = document.querySelector("input[name=people]:checked");
  let ocdValue = document.querySelector("input[name=ocd]:checked").value;

  if (endValue === "option2" && eyeValue === "option2" && functionValue === "option2" && viewValue === "option1" && peopleValue === "option2") {
    document.getElementById("python").style.display = "block;";

  } else if (endValue === "option1" && eyeValue === "option1" && functionValue === "option1" && viewValue === "option2" && peopleValue === "option1") {
    document.getElementById("javascript").style.display = "block;";
    }
  };
};

window.onreset = function() {
  hideResults();
}
