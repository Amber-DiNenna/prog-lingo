// User Interface Logic

function hideResults() {
  document.getElementById("python").style.display = "none";
  document.getElementById("javascript").style.display = "none";
  document.getElementById("ruby").style.display = "none";
  document.getElementById("n00b-error").style.display = "none";
}

window.onload = function() {
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
  let peopleValue = document.querySelector("input[name=people]:checked").value;
  let ocdValue = document.querySelector("input[name=ocd]:checked").value;

  if (endValue === "option2" && eyeValue === "option2" && fluffValue === "option2" && whatValue === "option2" && toonValue === "option1" && viewValue === "option1" && dudeValue === "option2" && peopleValue === "option2" && ocdValue === "option1") {
    document.getElementById("python").style.display = "block";

  } else if (endValue === "option1" && eyeValue === "option1" && fluffValue === "option1" && whatValue === "option1" && toonValue === "option2" && viewValue === "option2" && dudeValue === "option1" && peopleValue === "option1" && ocdValue === "option2") {
    document.getElementById("javascript").style.display = "block";
// it could be cool to have the other nick burns pic come up with the results


  /* neither of these work to render the n00b-error

  } else if (endValue === "null" || eyeValue === "null" || fluffValue === "null" || whatValue === "null" || toonValue === "null" || viewValue === "null" || dudeValue === "null" || peopleValue === "null" || ocdValue === "null") {
    document.getElementById("n00b-error").style.display = "block";

  } else if (!endValue || !eyeValue || !fluffValue || !whatValue || !toonValue || !viewValue || !dudeValue || !peopleValue || !ocdValue ) {
  document.getElementById("n00b-error").style.display = "block";
  */

  } else {
    document.getElementById("ruby").style.display = "block";
    }
  };
};

window.onreset = function() {
  hideResults();
}
