let resultScreen = document.querySelector("#res");
let result = 0;
let operatorSeq = "#";
let newFlg = false
resultScreen.innerHTML = "0"

function clickZero() {
    clear()
    zeroCut()
    resultScreen.innerHTML += "0";
}

function clickOne() {
    clear()
    zeroCut()
    resultScreen.innerHTML += "1";
}

function clickSum() {
    clear()
    operatorSeq = "+";
    result = parseInt(resultScreen.innerHTML, 2);
    resultScreen.innerHTML += "+";
}

function clickSub() {
    clear()
    operatorSeq = "-";
    resultScreen.innerHTML += "-";
}

function clickMul() {
    clear()
    operatorSeq = "*";
    result = parseInt(resultScreen.innerHTML, 2);
    resultScreen.innerHTML += "*";
}

function clickDiv() {
    clear()
    operatorSeq = "/";
    result = parseInt(resultScreen.innerHTML, 2);
    resultScreen.innerHTML += "/";
}

function clickEql() {
    if (operatorSeq !== "#") {
        newFlg = true;
    }
    let ans = 0;
    let i = 0
    let operand2 = 0

    switch (operatorSeq) {
        case "#":
            return
            break;
        case "+":
            i = (resultScreen.innerHTML).indexOf("+");
            operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
            ans = result + operand2;
            break;
        case "-":
            i = (resultScreen.innerHTML).indexOf("-");
            operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
            ans = result - operand2;
            break;
        case "*":
            i = (resultScreen.innerHTML).indexOf("*");
            operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
            ans = result * operand2;
            break;
        case "/":
            i = (resultScreen.innerHTML).indexOf("/");
            operand2 = parseInt((resultScreen.innerHTML).substr(i + 1), 2);
            ans = result / operand2;
            break;
    }
    operatorSeq = "#"
    resultScreen.innerHTML = ans.toString(2);
}
function clickClear() {
    resultScreen.innerHTML = "";

}

function clear() {
    if (newFlg) {
        clickClear()
        newFlg = false
    }
}

function zeroCut() {
    if ((resultScreen.innerHTML).indexOf("0") === 0
        && operatorSeq === "#") {
        resultScreen.innerHTML = (resultScreen.innerHTML).slice(1);
    }
}

//css
body{
    width:33%;
    background-color:#eef1f3;
  }
  #res{
    background-color:white;
    margin:8px 0;
    padding:8px;
    text-align:center;
    font-size:20px;
    border-radius: 4px;
    overflow:hidden;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: 0px 1px 16px 4px rgba(0, 0, 0, 0.1);
  }
  button{
    cursor:pointer;
    width:24%;
    height:36px;
    font-size:18px;
    margin:0.5%;
    float:left;
    text-decoration: none;
    background: #668ad8;
    color: #FFFFFF;
    outline:none;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.29);
    border: solid 1px #FFFFFF9F;
    border-radius: 4px;
    font-weight: bold;
    text-shadow: -1px -1px rgba(255, 255, 255, 0.2), 1px 1px rgba(0, 0, 0, 0.2);
  }
  #btn0,#btn1{
    background-color:#f05f95;
  }
  
  #btnClr,#btnEql{
    background-color:#2db5f5;
  }
  #btnSum,#btnSub,#btnMul,#btnDiv{
    background-color:#3273dc; 
  }

  //html
  <div id="res"></div>
<div id="btns">
  <button id="btn0" onclick="clickZero()">0</button>
  <button id="btn1" onclick="clickOne()">1</button>
  <button id="btnClr" onclick="clickClear()">C</button>
  <button id="btnEql" onclick="clickEql()">=</button>
  <button id="btnSum" onclick="clickSum()">+</button>
  <button id="btnSub" onclick="clickSub()">-</button>
  <button id="btnMul" onclick="clickMul()">*</button>
  <button id="btnDiv" onclick="clickDiv()">/</button>

</div>