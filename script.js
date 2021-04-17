'use strict';
const bot = confirm('Начать игру');
if (bot) {
    start();
} else {
    alert('Ну и пошел ты');
}
function start() {
    const num = Math.floor(Math.random() * (101 - 1) + 1);
    (function createNumber() {
        const question = prompt('Угадай число от 1 до 100');
        if (+question === num) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (question === null) {
            alert('Игра окончена');
        } else if (question > num) {
            alert('Загаданное число меньше');
            createNumber();
        } else if (isNaN(question)) {
            alert('Введи число!');
            createNumber();
        } else if (question < num) {
            alert('Загаданное число больше');
            createNumber();
        }
    })();
}




