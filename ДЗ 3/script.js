'use strict'

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var n = 100;

prime:
    for (var i = 2; i <= n; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue prime;
        }
        console.log(i);
    }

// 2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве.Задачи:
//    Организовать такой массив для хранения товаров в корзине;
//    Организовать функцию countBasketPrice, которая будет считать стоимость корзины.



var basket = [{
        product: "pen",
        price: 100
    },
    {
        product: "pencil",
        price: 200
    },
    {
        product: "file",
        price: 300
    },
    {
        product: "paper",
        price: 400
    }
];

function countBasketPrice(basket) {
    var sum = 0;
    for (let prod of basket) {
        sum += prod.price;
    }
    return sum;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));





// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:
// for (...) { // здесь пусто}

for (var i = 0; i < 10; i++)
    console.log(i);

// 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

var arr = [];
var i = 0;
while (i < 20) {
    i++;
    arr.push('x');
    console.log(arr);
}