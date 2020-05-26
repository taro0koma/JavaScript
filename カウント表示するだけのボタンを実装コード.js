var btn = document.createElement("Button");

btn.innerHTML = "0";
btn.id = "btn";
btn.className = "btnClass";

document.body.appendChild(btn);

btn.onclick = function() {
    btn.innerHTML++;
}

//または
/* Create a button */
var buttonCounter = document.getElementById('btn');

/* What to do when the button is clicked */
buttonCounter.addEventListener('click', function() {
    /* Increment number on button's label by 1 */
    buttonCounter.innerHTML = +(buttonCounter.innerHTML) + 1;
});

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>

.btnClass {
    width: 96px;
    height: 48px;
    font-size: 24px;
}