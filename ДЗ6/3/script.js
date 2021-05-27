'use strict'

var btn_prev = document.querySelector(".prev");
var btn_next = document.querySelector(".next");

var images = document.querySelectorAll("img");
var i = 0;

btn_prev.onclick = function () {
    images[i].style.display = "none";
    i--;

    if (i == -1) {
        i = images.length - 1;
    }
    images[i].style.display = "block";
}


btn_next.onclick = function () {
    images[i].style.display = "none";
    i++;

    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = "block";
}