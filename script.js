'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n) && n !== 0;
}; 
let expenses = []; 
let money;
//let start = function() {
//    money = prompt('Ваш месячный доход?');
//    while (isNumber(money)){
//        money = prompt('Ваш месячный доход?');
//    }
//}
do {
    money = +prompt('Ваш месячный доход?'); 
}
while (!isNumber(money));
const income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'Топливо, спортзал, парикмахерская'),
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000,

    showTypeof = function(data) {
        console.log(data, typeof(data));
    },
    getExpensesMonth = function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            //expenses[i] = prompt('Введите обязательную статью расходов?');
            //sum += +prompt('Во сколько это обойдется?');
            do {
                expenses[i] = prompt('Введите обязательную статью расходов?'); 
            }
            while (isNumber(expenses[i]));
            do {
                console.log('старт ' + sum); 
                sum += +prompt('Во сколько это обойдется?'); 
                console.log('конец ' + sum); 
            }
            while (!isNumber(sum));
        }
        console.log(sum); 
        return sum;
    },
    
    getExpensesAmount = getExpensesMonth(),
    getAccumulatedMonth = function() {
        return money - getExpensesAmount;
    },
   
    accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30),
    getTargetMonth = function(mission, accumulatedMonth) {
        return Math.ceil(mission / accumulatedMonth);
    },
    targetMonth = getTargetMonth(mission, accumulatedMonth);

//while (!isNumber(getExpensesMonth));

showTypeof(money);
showTypeof(income);  
showTypeof(deposit);
showTypeof(getExpensesAmount);

console.log('Всего обязательных расходов за месяц '+ getExpensesAmount +' рублей');
console.log('Накопления за месяц '+ accumulatedMonth +' рублей');
console.log('Бюджет на день '+ budgetDay + ' рублей');  
console.log('Цель заработать '+ mission + ' рублей');
console.log('Возможные расходы ', addExpenses.toLowerCase().split(', '));

if (isFinite(targetMonth)) {
    console.log('Цель будет достигнута за '+ targetMonth + ' месяцев');
} else if  (targetMonth <= 0) {
    console.log('Цель не будет достигнута');
} else  {
    console.log('Что то пошло не так');
}

if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 1200 && budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay === 0) {
    console.log('Бюджет за день равен нулю');
}
