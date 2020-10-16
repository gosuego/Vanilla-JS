const calculator = document.querySelector(".calculator");

function addOutput(num){
   
    calculator.value=calculator.value + num;
}
function reset() {
   
    calculator.value = "";
   
  }
function result(){
   if(!calculator.value) return false;
   calculator.value=eval(calculator.value);
}
