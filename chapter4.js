/* eslint-disable no-console */
// 'use strict'; 
alert('Lesson 4-36');
/////////////4,36 promises//////////////////////////////////////////////////

//код с использованием PROMISES
let drink = 0

function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
        }, 3000);
    })

    return promise;
}

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли');
}

shoot({})
    .then(mark => console.log('Вы попали вы цель!'))
    .then(win)
    .catch(loose)


////раньше без PROMISE код бы писали вот так:
// let drink = 0

// function shoot(arrow, headshot, fail) {
//     console.log('Вы сделали выстрел...');

//     setTimeout(function () {
//         Math.random() > .5 ? headshot({}) : fail('Вы промахнулись');
//     }, 3000);
// }

// function win() {
//     console.log('Вы победили');
//     (drink == 1) ? buyBeer(): giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пиво');
// }

// function giveMoney() {
//     console.log('Вам заплатили!');
// }

// function loose() {
//     console.log('Вы проиграли');
// }

// shoot({},
//     function (mark) {
//         console.log('Вы попали вы цель!');
//         win(mark, buyBeer, giveMoney);
//     },
//     function (miss) {
//         console.error(miss);
//         loose();
//     }
// )








//************
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    alert('some event exist!');
})


/////////////4,35//////////////////////////////////////////////////
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, passsword);
    request.open('GET', 'chapter4.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputRub.value / data.usd).toFixed(2);
        } else {
            inputUsd.value = request.responseText;
            // inputUsd.value = 'Что-то пошло не так';
        }
        console.log(`request.readyState = ${request.readyState}`);
        console.log(`request.status = ${request.status}`);
        console.log(`request.statusText = ${request.statusText}`);
        console.log(`request.response = ${request.response}`);
        console.log(`request.responseText = ${request.responseText}`);
    });
})


//4.32////////////////////////////////
// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.stringify(options));
// console.log(typeof(JSON.stringify(options)));
// console.log(JSON.parse(JSON.stringify(options)));
// console.log(typeof(JSON.parse(JSON.stringify(options))));