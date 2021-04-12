'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};
//let expenses1, expenses2;  
let expenses = []; 
let money;
//let start = function(){
 //   money = prompt('Ваш месячный доход?');
//    while (isNaN(money) || money.trim() === '' || money === null) {
  //      money = prompt('Ваш месячный доход?');
 //   }
//};
let start = function(){
    money = prompt('Ваш месячный доход?');
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};
start();

const income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
    'Топливо, спортзал, парикмахерская'),
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 1000000,

    showTypeof = function(data) {
        console.log(data, typeof(data));
    },
    getAccumulatedMonth = function() {
        return money - getExpensesAmount;
    },
    //getExpensesMonth = function() {
       // let sum = 0;
        //for (let i = 0; i < 2; i++) {
        //    if (i === 0) {
         //       expenses1 = prompt('Введите обязательную статью расходов?', 'квартплата, продукты');
         //   } else if (i === 1) {
         //       expenses2 = prompt('Введите обязательную статью расходов?', 'интернет');
         //   }
          //  sum += +prompt('Во сколько это обойдется?');
       // }
    getExpensesMonth = function() {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?');
            sum += +prompt('Во сколько это обойдется?');
        }
        console.log(sum); 
        return sum;
    },
    getExpensesAmount = getExpensesMonth(),
    accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30),
    getTargetMonth = function(mission, accumulatedMonth) {
        return Math.ceil(mission / accumulatedMonth);
    },
    targetMonth = getTargetMonth(mission, accumulatedMonth);



 
showTypeof(money);
showTypeof(income);  
showTypeof(deposit);

console.log('Всего обязательных расходов за месяц '+ getExpensesAmount +' рублей');
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
