// 'use strict';
let money,
    time;

function start() { //запрос бюджета на месяц
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        alert('Некорректные данные, повторите ввод!');
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '1900-12-31');
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () { // запрос обязательных статей расходов
        for (let i = 0; i < 2; i++) {
            let expensesType = prompt('Введите обязательную статью расходов N ' + (i + 1) + ' в этом месяце', ''),
                expensesAmount = prompt('Во сколько обойдется?', '0');

            if (typeof (expensesType) === 'string' && typeof (expensesType) != null && typeof (expensesAmount) != null && isNaN(expensesAmount) == false && expensesType != '' && expensesAmount != '' && expensesType.length < 50) {
                appData.expenses[expensesType] = expensesAmount;
                console.log((i+1) + ' запись прошла успешно');
            } else {
                i--;
                alert('Вы ввели некорректные данные, повторите ввод');
            }
        }
    },
    detectDayBudget: function () { //расчет дневного бюджета  и вывод на экран этого значения
        appData.moneyPerDay = Math.round(appData.budget / 30);
        alert('Ваш бюджет на один день: ' + appData.moneyPerDay + ' рублей');
    },
    detectLevel: function () { //расчет уровня достатка
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка в рассчетах');
        }
    },
    checkSavings: function () { //накопления с депозита, если он есть
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = Math.round(save / 100 / 12 * percent);
            alert('Доход в месяц в вашего депозита ' + appData.monthIncome + ' рублей');
        }
    },
    chooseOptExpenses: function () { //функция для определения необязательных расходов
        for (let i = 1; i <= 3; i++) {
            let optionalAmount = prompt('Напишите статью необязательных расходов №' + i + ':');
            appData.optionalExpenses[i] = optionalAmount;
        }
    },
    chooseIncome: function () { //запрос способов доп. заработка
        let items = prompt('Что принесет дополнительный доход? (Перечислите чере запятую)', '');
        while (!isNaN(items) || items == '' || items == null) {
            alert('Вы ввели некоректные данные!');
            items = prompt('Что принесет дополнительный доход? (Перечислите чере запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может, что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach(function (incomeName, i) { // вывод всех введенных способов доп дохода
            console.log('Способ доп. заработка №' + (i + 1) + ': ' + incomeName);
        });
    }
};
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

console.log('Наша программа включает в себя следующие данные: ');
for (let key in appData) {
console.log(key);
}

console.log(appData);






//********************************************************************************************************
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