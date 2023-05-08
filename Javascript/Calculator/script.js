console.log("successful....loading");





let num1 = "";
let num2 = "";
let op = "";

var displayDiv = $("#display");
function press(num) {
    num1 += num;
    $("display").html = num1;
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    $(display).html = "0";
}

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
}


// displayDiv.innerText = displayDiv.num1; //






