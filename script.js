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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function(){
        let itemIncome;
        let cashIncome;
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?',
                'Таксую');
                }
    
            while (isNumber(itemIncome));
            do {
                cashIncome = +prompt('Сколько в месяц зарабатываете на этом?',
                10000);
                }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }   
        
        const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
        'Топливо, спортзал, парикмахерская');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.addExpenses = appData.upperFirstLetter(appData.addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке?'); 
        if (appData.deposit) {
            appData.getInfoDeposit();
        }
        
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
    getInfoDeposit: function(){
        do {
            if (appData.deposit){
                appData.percentDeposit = +prompt('Какой годовой процент?', '10');
            } 
        }
        while (!isNumber(appData.percentDeposit));
        do {
            if (appData.deposit){
                appData.moneyDeposit = +prompt('Какая сумма заложена?', '10000');
            } 
        }
        while (!isNumber(appData.moneyDeposit));
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    },
    upperFirstLetter: function(array) {
        let word = '';
        for (let i = 0; i < array.length; i++) {
            word += array[i][0].toUpperCase() + array[i].slice(1) + ', ';
        }
        return word.slice(0, -2);
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();


console.log('Возможные расходы: ' + appData.addExpenses);
console.log('Расходы за месяц: '+ appData.expensesMonth + ' рублей');
console.log('Цель будет достигнута: '+ appData.period + ' месяцев');
console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log('свойства: '+ key + ' значение: ' + appData[key]);
}




