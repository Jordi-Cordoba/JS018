let imagen1 = document.getElementById("1");
let imagen2 = document.getElementById("2");

imagen1.onmouseover = function () {
    imagen1.src = "./card-front.png";
}
imagen1.onmouseout = function () {
    imagen1.src = "./card-back.png";
}
imagen2.onmouseover = function () {
    imagen2.src = "./card-front.png";
}
imagen2.onmouseout = function () {
    imagen2.src = "./card-back.png";
}