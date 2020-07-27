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
  })