function convert() {
    let x = document.getElementById("firstNum").value;
    const quotient = parseFloat(x) / 58.15 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "USD";
}

function convert1() {
    let x = document.getElementById("firstNum").value;
    const quotient = parseFloat(x) / 0.40 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "Yen";
}

function convert2() {
    let x = document.getElementById("firstNum").value;
    const quotient = parseFloat(x) / 0.041 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "Won";
}