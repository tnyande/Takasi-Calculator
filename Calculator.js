/*
function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var out = Number(a)+Number(b);

    document.getElementById("output").innerText= `Sum of number is $(out)`
}

function subtract(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var out = Number(a)-Number(b);

    document.getElementById("output").innerText= `The difference of number is $(out)`
}

function mul(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var out = Number(a)*Number(b);

    document.getElementById("output").innerText= `Product of number is $(out)`
}

function div(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    var out = Number(a)/Number(b);

    document.getElementById("output").innerText= `Division of number is $(out)`
}
*/

function cal(opt){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;

    if (opt=="add"){
        out= `Sum of number is ${Number(a)+Number(b)}`
    } else if(opt=="sub"){
        out= `Difference of number is ${Number(a)-Number(b)}`
    } 
    else if(opt=="mul"){
        out= `Product of number is ${Number(a)*Number(b)}`
    } else {
        out= `Division of number is ${Number(a)/Number(b)}`
    } 
    document.getElementById("output").innerText=out
}



