'use strict';
let isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n) && n !== 0;
    },
    money;
 
(function start() {
    do {
        money = +prompt('Ваш месячный доход?'); 
    }
    while (!isNumber(money));
}());

const appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function(){
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
        'Топливо, спортзал, парикмахерская');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
        let amount,
            exp;

        for (let i = 0; i < 2; i++) {
            do {
                exp = prompt('Введите обязательную статью расходов?'); 
            }
            while (isNumber(exp));
            do { 
                amount = +prompt('Во сколько это обойдется?'); 
            }
            while (!isNumber(amount));
            appData.expenses[exp] = amount;
        }
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function() {
        appData.period = Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');    
        } else if (appData.budgetDay <= 1200 && appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay === 0) {
            return ('Бюджет за день равен нулю');
        }

    },
};


appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();

console.log(appData);
console.log('Расходы за месяц: '+ appData.expensesMonth + ' рублей');
console.log('Цель будет достигнута: '+ appData.period + ' месяцев');
console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    
    console.log('свойства: '+ key + ' значение: ' + appData[key]);
}
