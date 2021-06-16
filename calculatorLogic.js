

add = (num1, num2) => {
    return +num1 + +num2;
}
sub = (num1, num2) => {
    return +num1 - +num2;
}
function multiplyNumbers(x,y){
    return x*y;
}
divide = (num1, num2) => {
    var result = +num1 / +num2;
    displayHistory(result);
    return result;
}

function historyResetFunction(){
  
    
    //document.getElementsByName("answer").value = empty;
    document.getElementById("display").value=" ";
    document.getElementById("numberBoxInput1").value=" ";
    document.getElementById("numberBoxInput2").value=" ";
    
}

function displayHistory(result){

    let history = result;
    document.getElementById("historyLog").placeholder= result;
}