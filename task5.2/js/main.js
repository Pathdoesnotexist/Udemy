alert('task5.2');
// + Получить кнопку "Начать расчет" через id
let start =  document.getElementById('start');    
console.log(start);

// + Получить все блоки в правой части программы через классы, 
//(которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
let resultsRaw = document.querySelector('.result-table');
let results = resultsRaw.querySelectorAll('[class *= "value"]'); 
    console.log(resultsRaw);
    console.log(results);

// + Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expenses = document.querySelectorAll('.expenses-item');
console.log(expenses);

// + Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let expensesBtn = document.getElementsByTagName('button')[0],
optionalExpensesBtn = document.getElementsByTagName('button')[1],
countBtn = document.getElementsByTagName('button')[2];

// + Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpenses);

// + Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');