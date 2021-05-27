'use strict'

function f(elem) {
    var a = elem.src.replace('small', 'big');
    var b = document.getElementById('big');
    b.src = a;

}

function ImageError() {
    document.querySelector('.wrapper').innerHTML = alert('такого изображения не существует');
}