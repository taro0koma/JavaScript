const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
let btn5 = document.getElementById("btn5");

btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};


Introduction
Powered by GitBook
Day 8: Create a Button and Buttons Container

Task 1 - Create a Button
Complete the code in the editor so that it creates a clickable button satisfying the following properties:

The button's id is btn.

The button's initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS object's innerHTML property.

​See original HackerRank problem​

Solution
<!-- HTML -->
<button id="btn" onclick="increment()">0</button>
/* CSS */
#btn {
  width: 96px;
  height: 48px;
  font-size: 24px;
}
// JS
function increment() {
  btn.innerHTML++;
}
​

<!-- HTML -->
<div id="btns">
    <button id="btn1">1</button>
    <button id="btn2">2</button>
    <button id="btn3">3</button>
    <button id="btn4">4</button>
    <button id="btn5">5</button>
    <button id="btn6">6</button>
    <button id="btn7">7</button>
    <button id="btn8">8</button>
    <button id="btn9">9</button>
</div>

/* CSS */
#btns {
    width: 75%;
  }
  
  button {
    width: 30%;
    height: 48px;
    font-size: 24px;
  }