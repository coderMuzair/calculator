var currentNum = document.querySelector(".cal-current");
var calHistory = document.querySelector(".cal-history");
var currentCalNum;
var currentOpr;
var ans = 0;
var multiplyNum = 1;

function num(param) {
  console.log(param);
  currentNum.innerHTML += param;
  calHistory.innerHTML += param;
}


function del(){
      currentNum.innerHTML = currentNum.innerHTML.substring(0, currentNum.innerHTML.length -1);
      calHistory.innerHTML = calHistory.innerHTML.substring(0, calHistory.innerHTML.length -1)
} 

function clr() {
  currentNum.innerHTML = "";
  calHistory.innerHTML = "";
  currentOpr = null;
  multiplyNum = 1;
  ans = 0;
  console.log("clear");
}

function operators(opr) {
  // currentNum = document.querySelector('.cal-current').innerHTML;
  console.log(currentNum.innerHTML);
  console.log(currentOpr);
  currentCalNum = Number(currentNum.innerHTML);
  console.log('currentCalNum: ', currentCalNum);
  currentNum.innerHTML = "";
  
  if(currentOpr){
    if(currentOpr == '+'){
      add(opr);
    }else if(currentOpr == '-'){
      subtract(opr)
    }else if(currentOpr == 'x'){
      product(opr);
    }else if(currentOpr == '÷'){
      divide(opr);
    }
  }else
    if(opr == '+'){
      add(opr);
    }else if(opr == '-'){
      subtract(opr);
    }else if(opr == 'x'){
      product(opr);
    }
    else if(opr = '÷'){
      divide(opr);
    }
  
}
function add(o){
    currentOpr = o;
    calHistory.innerHTML += o;
    ans = ans + currentCalNum;
}
function subtract(o){
    currentOpr = o;
    calHistory.innerHTML += o;
    if (!ans) {
      ans = currentCalNum - ans;
    } else {
      ans = ans - currentCalNum;
    }
}

function product(o){
  currentOpr = o;
  calHistory.innerHTML += o;
  multiplyNum = multiplyNum * currentCalNum;
  ans = multiplyNum;
}
function divide(o){
    currentOpr = o;
    calHistory.innerHTML += o;
    if (!ans) {
      ans = currentCalNum;
    } else {
      ans = ans / currentCalNum;
    }
    
}

function equal() {
  calHistory.innerHTML = "";
  currentCalNum = Number(currentNum.innerHTML);
  if (currentOpr == "+") {
    currentNum.innerHTML = ans + currentCalNum;
  } else if (currentOpr == "-") {
    currentNum.innerHTML = ans - currentCalNum;
  } else if (currentOpr == "x") {
    currentNum.innerHTML = ans * currentCalNum;
  } else if (currentOpr == "÷") {
    currentNum.innerHTML = ans / currentCalNum;
  }
}
