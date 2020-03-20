import Calculator from "./calculator.js";

const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.calcBtn');
console.log(screen);


new Calculator({screen, buttons, enableLog: true});

/*
function operacion(){
    let a = document.getElementById("number").value;
    let op = document.querySelector('span[class = "suma"]').innerText;
    let b =  document.getElementById("number").value;
    console.log(op);
    
    switch (op,a ,b ) {
        case op == "suma":
            let resul = a+b;
            document.getElementById("number").value = resul;
            break;
    
        default:
            break;
    }
    console.log(a);
    
}
*/