// disable input field and set background
function disabledAndSetBG(inputID) {
  const selectId = document.getElementById(inputID);
  selectId.disabled = true;
  selectId.style.background = "#3D4153";
}
disabledAndSetBG("disply-pin");
disabledAndSetBG("input-pin");


// Generate Random value
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Add event listener to generate button and creat random value 
document.getElementById("generate-pin").addEventListener("click", function () {
  var randomValue = Math.round(randomNumber(1000, 9999)); //set range of random number and call function
  document.getElementById("disply-pin").value = randomValue;
  document.getElementById("notify-match").style.display = "none";
  document.getElementById("notify-dont-match").style.display = "none";
});

//add event listener to all number button 
const len = document.querySelectorAll(".buton-control").length;
for (var i = 0; i < len; i++)
  document.querySelectorAll(".buton-control")[i].addEventListener("click", function () {
    const number = this.innerHTML; // get value of button
    const previousValue = document.getElementById("input-pin").value;
    document.getElementById("input-pin").value = previousValue + number;
  });

//set clear button functionality
document.getElementById("clear").addEventListener("click", function () {
  var innerValue = document.getElementById("input-pin").value;
  document.getElementById("input-pin").value = '';
});

// Pin Matching part
document.getElementById("submit").addEventListener("click", function () {
  var submitChance = parseInt(document.getElementById("submit-chance").innerHTML); // chance of entering password
  const randNumber = document.getElementById("disply-pin").value;
  const inputedNumber = document.getElementById("input-pin").value;

  if (randNumber.length == 0 || inputedNumber.length == 0) { // if empty any input field then show warning
    alert("Doesn't Empty any Field...");
  }
  else if (randNumber == inputedNumber) { //if pin matched active this feature
    document.getElementById("notify-dont-match").style.display = "none";
    document.getElementById("notify-match").style.display = "block";
    document.getElementById("submit-chance").innerHTML = 3;
    document.getElementById("disply-pin").value = '';
    document.getElementById("input-pin").value = '';
  }
  else {
    document.getElementById("notify-dont-match").style.display = "block";
    submitChance--; // reduce try value
    document.getElementById("submit-chance").innerHTML = submitChance;

    if (submitChance == 0) { // disabled all feature after there times fail
      var submitButton = document.getElementById("submit");
      var pinGenaretorButton = document.getElementById("generate-pin");
      pinGenaretorButton.disabled = true;
      pinGenaretorButton.style.background = "red";
      pinGenaretorButton.style.transition = ".5s";

      submitButton.disabled = true;
      submitButton.style.background = "red";
      submitButton.style.transition = ".5s";
      document.getElementById("disply-pin").value = '';
      document.getElementById("notify-dont-match").style.display = "none";
    }

  }
  document.getElementById("input-pin").value = ''; //clear input field
});

// (backspace button " < ") delete one number per click
document.getElementById("backspace").addEventListener("click", function () {
  var presentValue = document.getElementById("input-pin").value;
  if (presentValue != '') {
    presentValue = presentValue.slice(0, -1);
    document.getElementById("input-pin").value = presentValue;
  }
});