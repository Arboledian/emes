
function gbtn() {

    button.style.background = "grey"
    setTimeout(color1, 100)
}
function gbtn2() {
    button2.style.background = "grey";
    setTimeout(color2, 100)
}
function gbtn3() {
    button3.style.background = "grey";
    setTimeout(color3, 100)
}

function gbtnr() {

    buttonr1.style.background = "grey"
    setTimeout(color4, 100)
}
function gbtnr2() {
    buttonr2.style.background = "grey";
    setTimeout(color5, 100)
}
function gbtnr3() {
    buttonr3.style.background = "grey";
    setTimeout(color6, 100)
}

//feedback visual
function color1() {
    button.style.background = "red"
    VotoAp += 1;
    vtotal();
}
function color2() {
    button2.style.background = "orange"
    VotoRe += 1;
    vtotal();
}
function color3() {
    button3.style.background = "gold"
    VotoNu += 1;
    vtotal();
}
function color4() {
    buttonr1.style.background = "red"
    if (VotoAp > 0) {
        VotoAp -= 1;
    }
    else {
        return null;
    }
    vtotal();
}
function color5() {
    buttonr2.style.background = "orange"
    if (VotoRe > 0) {
        VotoRe -= 1;
    }
    else {
        return null;
    }
    vtotal();
}
function color6() {
    buttonr3.style.background = "gold"
    if (VotoNu > 0) {
        VotoNu -= 1;
    }
    else {
        return null;
    }
    vtotal();
}

function vtotal() {
    VotoTo = VotoAp + VotoRe + VotoNu;
    capturar();
}

function capturar() {
    function Meme(Apruebo, Rechazo, Nulo) {
        this.Apruebo = Apruebo;
        this.Rechazo = Rechazo;
        this.Nulo = Nulo;
    }
    var captureApruebo = document.getElementById("Apruebo").value;
    var captureRechazo = document.getElementById("Rechazo").value;
    var captureNulo = document.getElementById("Nulo").value;
    sujeto = new Meme(captureApruebo, captureRechazo, captureNulo);
    agregar();
}


function agregar() {
    document.getElementById("Apruebo").innerHTML = "Apruebo:" + VotoAp;
    document.getElementById("Rechazo").innerHTML = "Rechazo:" + VotoRe;
    document.getElementById("Nulo").innerHTML = "Nulo:" + VotoNu;
    document.getElementById("Total").innerHTML = "Total:" + VotoTo;
};

var VotoAp = 0;
var VotoRe = 0;
var VotoNu = 0;
var VotoTo = 0;


//colores botones

var button = document.getElementById("boton");
console.log(button.innerHTML);
button.style.color = "white";
button.style.background = "red";

var button2 = document.getElementById("boton2");
console.log(button2.innerHTML);
button2.style.color = "white";
button2.style.background = "orange";

var button3 = document.getElementById("boton3");
console.log(button2.innerHTML);
button3.style.color = "white";
button3.style.background = "gold";

var buttonr1 = document.getElementById("botonr1");
console.log(button.innerHTML);
buttonr1.style.color = "white";
buttonr1.style.background = "red";

var buttonr2 = document.getElementById("botonr2");
console.log(button2.innerHTML);
buttonr2.style.color = "white";
buttonr2.style.background = "orange";

var buttonr3 = document.getElementById("botonr3");
console.log(button2.innerHTML);
buttonr3.style.color = "white";
buttonr3.style.background = "gold";
