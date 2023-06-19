var currentNum = document.querySelector(".cal-current");
var calHistory = document.querySelector(".cal-history");
var currentCalNum;
var currentOpr;
var ans = 0;
var multiplyNum = 1;
var currentAns = 0;

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
  currentAns = 0;
  console.log("clear");
}

function operators(opr) {
  console.log('opr: ', opr);

  var preventDupl = calHistory.innerHTML.charAt(calHistory.innerHTML.length-1)
  console.log('preventDupl: ', preventDupl);
  if(preventDupl == opr ) return;
  // }else if (preventDupl == "+" || preventDupl == "-" || preventDupl == "x" || preventDupl == "÷"){

  //       calHistory.innerHTML = calHistory.innerHTML.slice(0, -1) ;
  // }
  
  // else{
  //   if(currentOpr){
  //     console.log('else', calHistory.innerHTML.slice(0, -1) );
  //     calHistory.innerHTML = calHistory.innerHTML.slice(0, -1) ;

  //   }
    // .length - 1 = opr
    // console.log('preventDupl else: ', preventDupl);
  // }
  
  // preventDupl = opr
  // console.log('preventDupl: ', preventDupl);

  currentCalNum = Number(currentNum.innerHTML);
  currentNum.innerHTML = "";
  if(currentAns){
    calHistory.innerHTML = currentAns;
  }
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
  // if(!currentOpr){
  // }
  // console.log('preventDupl in add: ', calHistory.innerHTML.charAt(calHistory.innerHTML-1));

  calHistory.innerHTML += o;
  console.log('o add function: ', o);
  currentOpr = o;
    if(currentAns){
      ans = currentAns 
    }else{
      ans = ans + currentCalNum;
    }
}
function subtract(o){
  if(!currentOpr){
    calHistory.innerHTML += o;
  }
  currentOpr = o;
    if(currentAns){
      ans = currentAns 
    }else if (!ans) {
      ans = currentCalNum - ans;
    } else {
      ans = ans - currentCalNum;
    }
}
function product(o){
  if(!currentOpr){
    calHistory.innerHTML += o;
  }
  currentOpr = o;
  if(currentAns){
    ans = currentAns 
  }else{
    multiplyNum = multiplyNum * currentCalNum;
    ans = multiplyNum;
  }
}
function divide(o){
  if(!currentOpr){
    calHistory.innerHTML += o;
  }
  currentOpr = o;
    if(currentAns){
      ans = currentAns 
    }else if (!ans) {
      ans = currentCalNum;
    } else {
      ans = ans / currentCalNum;
    }
    
}

function equal() {
  calHistory.innerHTML = "";
  // currentAns = 0;
  currentCalNum = Number(currentNum.innerHTML);
  console.log('ans: ', ans);
  if (currentOpr == "+") {
    currentAns = ans + currentCalNum;
    console.log('ans: ', ans);
    console.log('currentAns equal: ', currentAns);
    currentNum.innerHTML = currentAns;
  } else if (currentOpr == "-") {
    currentAns = ans - currentCalNum;
    currentNum.innerHTML = currentAns;
  } else if (currentOpr == "x") {
    currentAns = ans * currentCalNum;
    currentNum.innerHTML = currentAns;
  } else if (currentOpr == "÷") {
    currentAns = ans / currentCalNum;
    currentNum.innerHTML = currentAns;
  }
}
