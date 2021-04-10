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
    showTypeof = function(data) {
        console.log(data, typeof(data));
    },
    getAccumulatedMonth = function(money, getExpensesMonth) {
        return money - getExpensesMonth;
    },
    getExpensesMonth = function(a, b) {
        return a + b;
    },
    accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2)),
    budgetDay = Math.floor(accumulatedMonth / 30),
    getTargetMonth = function(mission, accumulatedMonth) {
        return Math.ceil(mission / accumulatedMonth);
    },
    targetMonth = getTargetMonth(mission, accumulatedMonth);

showTypeof(money);
showTypeof(income);  
showTypeof(deposit);

console.log('Всего обязательных расходов за месяц '+ getExpensesMonth(amount1, amount2) +' рублей');
console.log('Накопления за месяц '+ accumulatedMonth +' рублей');
console.log('Бюджет на день '+ budgetDay + ' рублей');  
console.log('Цель заработать '+ mission + ' рублей');
console.log('Возможные расходы ', addExpenses.toLowerCase().split(', '));

if (isFinite(targetMonth)) {
    console.log('Период равен '+ targetMonth + ' месяцев');
} else {
    console.log('Что то пошло не так');
}

if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 1200 && budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0) {
    console.log('Вы бомж');
} else {
    console.log('Что то пошло не так');
}
