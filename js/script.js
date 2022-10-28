function convert() {
    let amount = document.getElementById("firstNum").value;
    const quotient = parseFloat(amount) / 58.15 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "USD";
}

function convert1() {
    let amount = document.getElementById("firstNum").value;
    const quotient = parseFloat(amount) / 0.4 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "Yen";
}

function convert2() {
    let amount = document.getElementById("firstNum").value;
    const quotient = parseFloat(amount) / 0.041 ;

    document.getElementById("converted").innerHTML = quotient;
    document.getElementById("unit").innerHTML = "Won";
}