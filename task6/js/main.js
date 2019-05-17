alert('task 6');

let startBtn = document.getElementById('start'); //кнопка "Начать расчет"
let resultsRaw = document.querySelector('.result-table'), // классы, которые название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
    results = resultsRaw.querySelectorAll('[class *= "value"]');
let expenses = document.querySelectorAll('.expenses-item'); //поля(input) c обязательными расходами
let expensesBtn = document.getElementsByTagName('button')[0], //кнопки “Утвердить” и “Рассчитать” 
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item'); //поля для ввода необязательных расходов
let incomeItem = document.querySelector('.choose-income'), //статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

//БЛОК КОДА, СОЗДАННЫЙ В ЗАДАНИЯХ 1-4, который мы модифицируем
let money,
    time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

startBtn.addEventListener('click', function () { //запрос даты и дохода по нажатию кнопки начать рассчет
    time = prompt('Введите дату в формате YYYY-MM-DD', '1900-12-31');
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        alert('Некорректные данные, повторите ввод!');
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    results[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();


    expensesBtn.addEventListener('click', function () { //ввод обязательных расходов
        let summ = 0;

        for (let i = 0; i < expenses.length; i++) {
            let expensesType = expenses[i].value,
                expensesAmount = expenses[++i].value;

            if (typeof (expensesType) === 'string' && typeof (expensesType) != null && typeof (expensesAmount) != null && isNaN(expensesAmount) == false && expensesType != '' && expensesAmount != '' && expensesType.length < 50) {
                appData.expenses[expensesType] = expensesAmount;
                console.log((i + 1) + ' запись прошла успешно');
                summ += +expensesAmount;
            } else {
                i--;
                alert('Вы ввели некорректные данные, повторите ввод');
            }
        }
        results[3].textContent = summ;
    });

    optionalExpensesBtn.addEventListener('click', function () { //ввод необязательных расходов
        for (let i = 0; i <= optionalExpenses.length; i++) {
            let optionalAmount = optionalExpenses[i].value;
            appData.optionalExpenses[i] = optionalAmount;
            results[4].textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBtn.addEventListener('click', function () { //дневной бюджет
        if (appData.budget != undefined) {

            appData.moneyPerDay = Math.round((appData.budget - +results[3].textContent ) / 30); 
            results[1].textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) { //определение уровня доходов
                results[2].textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                results[2].textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                results[2].textContent = 'Высокий уровень достатка';
            } else {
                results[2].textContent = 'Произошла ошибка в рассчетах';
            }
        } else {
            results[1].textContent = 'Ошибка: начните расчет для получения значений';
        }
    });

    incomeItem.addEventListener('input', function () { //расчет возможных доходов
        let items = incomeItem.value;
        // while (!isNaN(items) || items == '' || items == null) {
        //     alert('Вы ввели некоректные данные!');
        //     items = incomeItem.value;
        // }
        appData.income = items.split(', ');
        results[5].textContent = appData.income;
    });

    checkSavings.addEventListener('click', function () {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function () { //расчет депозита под процентом
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            results[6].textContent = appData.monthIncome.toFixed(1);
            results[7].textContent = appData.yearIncome.toFixed(1);
        }
    });
    percentValue.addEventListener('input', function () {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            results[6].textContent = appData.monthIncome.toFixed(1);
            results[7].textContent = appData.yearIncome.toFixed(1);
        }
    });
});
console.log('Наша программа включает в себя следующие данные: ');
for (let key in appData) {
    console.log(key);
}
console.log(appData);

// chooseIncome: function () { //запрос способов доп. заработка
//     let items = prompt('Что принесет дополнительный доход? (Перечислите чере запятую)', '');
//     while (!isNaN(items) || items == '' || items == null) {
//         alert('Вы ввели некоректные данные!');
//         items = prompt('Что принесет дополнительный доход? (Перечислите чере запятую)', '');
//     }
//     appData.income = items.split(', ');
//     appData.income.push(prompt('Может, что-то еще?', ''));
//     appData.income.sort();
//     appData.income.forEach(function (incomeName, i) { // вывод всех введенных способов доп дохода
//         console.log('Способ доп. заработка №' + (i + 1) + ': ' + incomeName);
//     });
// }




// +2) Если программа еще не запущена( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.
// РЕШЕНО ЧЕРЕЗ:
// expensesBtn.disabled = true;
// optionalExpensesBtn.disabled = true;
// countBtn.disabled = true; 
// с последующим их переключением на слушателе начать расчет

// +3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)