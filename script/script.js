'use strict';
alert('Hello Vlad');
const money = 50000,
    income = 'Фриланс',
    addExpenses = 'Автосервис, интернет, спортзал',
    deposit = true, 
    mission = 1000000,
    period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен '+ period + ' месяцев');
console.log('Цель заработать '+ mission + ' рублей');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = 50000;
budgetDay /= 30;
console.log(budgetDay);
