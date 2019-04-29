'use strict';
let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1900-12-31');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expensesType = prompt('Введите обязательную статью расходов N ' + (i+1) + ' в этом месяце', ''),
        expensesAmount = prompt('Во сколько обойдется?', '0');

    if (typeof(expensesType) === 'string' && typeof(expensesType) != null && typeof(expensesAmount) != null && expensesType != '' && expensesAmount != '' && expensesType.length < 50) {
        appData.expenses[expensesType] = expensesAmount;
        console.log(i + ' запись прошла успешно');
    } else { 
    i--;
    alert('Вы ввели некорректные данные, повторите ввод'); 
    }
}

// let i = 0;
// while (i < 2) {

// let expensesType = prompt('Введите обязательную статью расходов N ' + (i+1) + ' в этом месяце', ''),
//         expensesAmount = prompt('Во сколько обойдется?', '0');

//     if (typeof(expensesType) === 'string' && typeof(expensesType) != null && typeof(expensesAmount) != null && expensesType != '' && expensesAmount != '' && expensesType.length < 50) {
//         appData.expenses[expensesType] = expensesAmount;
//         console.log(i + ' запись прошла успешно');
//     } else { 
//     i--;
//     alert('Вы ввели некорректные данные, повторите ввод'); 
//     }
//     i++;
// }

appData.moneyPerDay = appData.budget / 30;

alert('Ваш бюджет на один день: ' + Math.round(appData.moneyPerDay) + ' рублей');

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay < 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка в рассчетах');
}