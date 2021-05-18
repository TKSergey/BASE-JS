var answers = []; //история ответов
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function answer(gameText, gameAnswer1, gameAnswer2) {
    var ok = false;
    do {
        event = +prompt(gameText + gameAnswer1 + gameAnswer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1:
            answers.push([gameText, gameAnswer1]);
            break;
        case 2:
            answers.push([gameText, gameAnswer2]);
            break;
        case -1:
            answers.push([gameText, "Вышли из игры"]);
            break;
    }
    return event;
}
/////////
switch (answer(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (answer(works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то также переходим на 4 окно
                answer(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (answer(works.c00, works.c1, works.c2)) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // если ввели 2 то также переходим на 4 окно
                ansver(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
var step = +prompt("введите номер хода для просмотра истории ответов");
var stepHistory = "В ходе № " + step + " " + answers[step - 1][0] + "Ваш выбор " + answers[step - 1][1];
alert(stepHistory);