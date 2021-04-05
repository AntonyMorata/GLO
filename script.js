'use strict';
const money = +prompt('Ваш месячный доход?', '70000'),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'Топливо, спортзал, парикмахерская'),
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000,
    expenses1 = prompt('Введите обязательную статью расходов?', 'квартплата, продукты'),
    amount1 = +prompt('Во сколько это обойдется?', '20000'),
    expenses2 = prompt('Введите обязательную статью расходов?', 'интернет'),
    amount2 = +prompt('Во сколько это обойдется?', '600'),
    budgetMonth = money - (amount1 + amount2),
    period = Math.ceil(mission / budgetMonth),
    budgetDay = Math.floor(budgetMonth / 30);


if (isFinite(period)) {
    console.log('Период равен '+ period + ' месяцев');
} else {
    console.log('У тебя ничего не получится');
}
console.log('Цель заработать '+ mission + ' рублей');
console.log('Доход за месяц ' + money + ' рублей');
console.log('Возможные расходы ', addExpenses.toLowerCase().split(', '));
console.log('Депозит в банке ' + deposit);
console.log('Обязательная статья расходов 1 ' + expenses1);
console.log('Расходы ' + amount1 + ' рублей');
console.log('Обязательная статья расходов 2 ' + expenses2);
console.log('Расходы ' + amount2 + ' рублей');
console.log('Бюджет на месяц '+ budgetMonth + ' рублей');
console.log('Бюджет на день '+ budgetDay + ' рублей');

if (budgetDay > 1200) {
    console.log('У вас высокий уровень доход');
} else if (budgetDay <= 1200 && budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0) {
    console.log('Вы бомж');
} else {
    console.log('Что то пошло не так');
}

