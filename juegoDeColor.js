let mensaje = document.getElementById("mensaje");
let displayColor = document.getElementById("displayColor");
let squares = document.querySelectorAll(".square");
let newGame = document.getElementById("reset");
let expert = document.getElementById("experto");
let noob = document.getElementById("novato");
let colors = generateColors();
let pickedColor = colors[Math.floor(Math.random()*6)];

calculatePickedColor();
main(colors);
function main(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color[i];
    }
    for (i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(e) {
            let clickedColor = this.style.backgroundColor;
            console.log("ESTE ES CLICKEADO")
            console.log(clickedColor);
            console.log("ESTE ES EL QUE TOCA")
            console.log(pickedColor);
            if (pickedColor === clickedColor) {
                mensaje.textContent = "Correcto";
                mensaje.style.color = "black";
                changeColor(clickedColor);
            } else {
                mensaje.textContent = "Intenta de nuevo";
                mensaje.style.color = "black";
                //this.style.position = "absolute";
                //this.style.clip= "rect(1px, 1px, 1px, 1px)";
                //this.style.display = "none";
                //this.style.visibylity = "hiden";
                //this.style.opacity = 0;
                this.style.backgroundColor = "#232323";
           }
        });
    }
}

function calculatePickedColor() {
    let rgb = pickedColor.split(",");
    let r;
    if (rgb[0].length == 5) {
        r = rgb[0].charAt(4);
    } else if (rgb[0].length == 6) {
        r = rgb[0].substring(4, 6);
    } else {
        r = rgb[0].substring(4, 7);
    }
    r = parseInt(r);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);
    displayColor.textContent = "RGB(" + r + ", " + g + ", " + b + ")";
    displayColor.style.color = "white";
}

function changeColor(color) {
    let header = document.querySelector("h1");
    header.style.backgroundColor = color;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;   
    }
}

function randomColor() {
    let r1 = Math.floor(Math.random() *256);
    let g1 = Math.floor(Math.random() *256);
    let b1 = Math.floor(Math.random() *256);
    let color = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
    return color;
}

function generateColors() {
    var arr = [];
    for (let i = 0; i < squares.length; i++) {
        arr.push(randomColor())
    }
    return arr;
}

newGame.addEventListener("click", function(e) {
    colors = generateColors();
    pickedColor = null;
    clickedColor = null;
    pickedColor = colors[Math.floor(Math.random()*6)];
    calculatePickedColor();
    main(colors);
});


if (true /* si expert esta selected */) {
    noob.onclick = function() {
        console.log("SI SIRVE 1");
    };
}
if (true /* si noob esta selected */) {
    expert.onclick = function() {
        console.log("SI SIRVE 2");
    }
}

