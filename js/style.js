// disable input field and set background

function disabledAndSetBG(inputID){
    const selectId = document.getElementById(inputID);
    selectId.disabled  = true;
    selectId.style.background = "#3D4153";
}
disabledAndSetBG("disply-pin");
disabledAndSetBG("input-pin");


// Generate Random value
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
 
// Add event listener to generate button and creat random value 
  document.getElementById("generate-pin").addEventListener("click",function(){
        var randomValue = Math.round(randomNumber(1000,9999));
         document.getElementById("disply-pin").value = randomValue;
         document.getElementById("notify-match").style.display = "none";
         document.getElementById("notify-dont-match").style.display = "none";
  })

  //add event listener to all number button 
  const len = document.querySelectorAll(".buton-control").length;
  for(var i = 0; i<len; i++)
  document.querySelectorAll(".buton-control")[i].addEventListener("click",function(){
    const number = this.innerHTML;
    const previousValue = document.getElementById("input-pin").value;
    document.getElementById("input-pin").value = previousValue + number;
  })

  //set clear button
  document.getElementById("clear").addEventListener("click",function(){
      const innerValue = document.getElementById("input-pin").value;
      document.getElementById("input-pin").value = '';
  })

  // Pin Matching
  document.getElementById("submit").addEventListener("click",function(){
    const randNumber =  document.getElementById("disply-pin").value;
    const inputedNumber =  document.getElementById("input-pin").value;
    
    if(randNumber.length == 0 || inputedNumber.length == 0){
        alert("Doesn't Empty any Field...");
    }
    else if(randNumber ==  inputedNumber){
        document.getElementById("notify-match").style.display = "block";
    }
    else{
        document.getElementById("notify-dont-match").style.display = "block";
    }
    document.getElementById("disply-pin").value = '';
    document.getElementById("input-pin").value = '';
})