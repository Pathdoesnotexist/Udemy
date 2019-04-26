'use strict';
let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1900-12-31');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expensesTypeOne = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesAmountOne = prompt('Во сколько обойдется?', '0'),
    expensesTypeTwo = prompt('Введите вторую обязательную статью расходов в этом месяце', ''),
    expensesAmountTwo = prompt('Во сколько обойдется?', '0');

appData.expenses.expensesTypeOne = expensesAmountOne;
appData.expenses.expensesTypeTwo = expensesAmountTwo;

alert ('Ваш бюджет на один день: ' + Math.round(money / 30) + 'рублей');

