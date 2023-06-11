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

// function calculation (){

// }

// function del(){
//     lastIndexOf()
// }

function clr() {
  currentNum.innerHTML = "";
  calHistory.innerHTML = "";
  multiplyNum = 1;
  ans = 0;
  console.log("clear");
}

function operators(opr) {
  // currentNum = document.querySelector('.cal-current').innerHTML;
  console.log(currentNum.innerHTML);
  currentCalNum = parseInt(currentNum.innerHTML);
  currentNum.innerHTML = "";
  if (opr == "+") {
    currentOpr = "+";
    calHistory.innerHTML += " + ";
    ans = ans + currentCalNum;
  } else if (opr == "-") {
    currentOpr = "-";
    calHistory.innerHTML += " - ";
    if (!ans) {
      ans = currentCalNum - ans;
    } else {
      ans = ans - currentCalNum;
    }
  } else if (opr == "x") {
    if (currentCalNum) {
      multiplyNum = multiplyNum * currentCalNum;
      ans = multiplyNum;
      calHistory.innerHTML += " x ";
      currentOpr = "x";
      console.log("ans: ", ans);
    }
  } else if (opr == "/") {
    currentOpr = "/";
    calHistory.innerHTML += "÷";
    if (!ans) {
      ans = currentCalNum;
    } else {
      ans = ans / currentCalNum;
    }
    // ans = ans / currentCalNum;
    console.log("ans: ", ans);
  }
  // console.log (ans);
}

function equal() {
  calHistory.innerHTML = "";
  currentCalNum = parseInt(currentNum.innerHTML);
  if (currentOpr == "+") {
    currentNum.innerHTML = ans + currentCalNum;
  } else if (currentOpr == "-") {
    currentNum.innerHTML = ans - currentCalNum;
  } else if (currentOpr == "x") {
    currentNum.innerHTML = ans * currentCalNum;
  } else if (currentOpr == "/") {
    currentNum.innerHTML = ans / currentCalNum;
  }
}
