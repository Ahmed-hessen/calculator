
let input  = document.getElementById("input") ;

let exp = "";

function press (num) {
    exp += num;
    input.value = exp;
}

function equal (){
    let result = eval(exp);
     exp = result;
    input.value = result;
    
}
function erase() {
    exp = "";
    input.value = exp;
}
