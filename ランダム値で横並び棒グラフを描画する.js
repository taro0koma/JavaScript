// <input type="text" id="テキストボックスのid">
// const num=document.getElementById("count").value
// もしくは　　=document.forms.form1.count.value

const num = 10
let array = new Array(num)

for (let i = 0; i < num; i++) {
    array[i] = Math.floor(Math.random() * 10) + 1
}
let line = "- + "
for (let i = 10; i >= 1; i--) {
    let markers = i + "| "
    if (i < 10) {
        markers = " " + markers
    }
    for (let j = 0; j < num; j++) {
        if (array[j] >= i) {
            markers += "* "
        } else {
            markers += "  "
        }
    }
    line += "- "

    console.log(markers)
}
console.log(line)
let dataNum = "    "
for (let i = 0; i < num; i++) {
    dataNum += i % num + " "
}
console.log(dataNum)

