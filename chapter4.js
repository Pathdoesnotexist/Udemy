/* eslint-disable no-console */
// 'use strict'; 
alert('Lesson 4-41');
/////////////4,41 webpack///////////////////////////

function myModule () {
    this.hello = function () {
        return 'Hello!';
    }

    this.goodbye = function () {
        return 'GoodBye!';
    }
}

module.exports = myModule;






 










/////////////4,40 инкапсуляция///////////////////////////
//1 метод - анонимные самовызывающиеся функции
// let number = 1;

// (function(){
//     let number = 2;
//     console.log(number);

//     return console.log(number+3);
// }
// () // вызов созданной анонимной функции
// )
// console.log(number);
// //2 метод - использование объектного интерфейса/
// let user = (function(){
//     let privat = function(){
//         console.log('I am privat');
//     }

//     return {
//         'sayHello' : function() {
//             console.log('Hello');
//         }
//     }
// }
// ()
// )
// console.log(user);
// console.log(user.sayHello);
// console.log(user.sayHello());

// //3 метод
// let user = (function(){
//     let privat = function(){
//         console.log('I am privat');
//     }

//     let sayHello = function() {
//         console.log('Hello');
//     }

//     return {
//         'sayHello' : sayHello
//         }
//     }
// ()
// )
// console.log(user);
// console.log(user.sayHello);
// console.log(user.sayHello());

//////////////////////////////////////////////
// function User(name, age) {
//     this.name = name;
//     // this.age = age;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя ${this.name}, восраст: ${userAge}`);
//     }
//     this.getAge = function () {
//         return userAge;
//     };
//     this.setAge = function (age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//         userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }

// }


// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.userAge);
// console.log(ivan.getAge());


// ivan.setAge(30);
// console.log(ivan.getAge());

// ivan.say();





/////////////4,39 jquery///////////////////////////
// document.getElementById('btn'); <=> $('#btn')

$(document).ready(function () {
    $('.list-item:first').hover(function () {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function () {
        $('.image:even').fadeToggle('slow');
    })

    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle',
        }, 3000);
    })

});

// //функционал jquery постепенно был включен в нативный js:
// document.querySelectorAll('.class').forEach();
// .classList
// .addEventListener
// $.ajax -> fetch в js
// .animate()





/////////////4,38 local Storage///////////////////////////////////////////
let json = '{"id": 2}';

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error('В этих данных нет имени');

    }
    // console.log('Start');
    // console.log(a);
    // console.log('Stop');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку ${error.name}`);
} finally {
    console.log(`хоть и поймали ошибку, выполнение кода было завершено`);
}









/////////////4,37 local Storage//////////////////////////////////////////////////

// localStorage.setItem('number', 1);

/////////////4,36 promises//////////////////////////////////////////////////

//код с использованием PROMISES
// let drink = 0

// function shoot(arrow) {
//     console.log('Вы сделали выстрел...');
//     let promise = new Promise(function (resolve, reject) {

//         setTimeout(function () {
//             Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');
//         }, 3000);
//     })

//     return promise;
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

// shoot({})
//     .then(mark => console.log('Вы попали вы цель!'))
//     .then(win)
//     .catch(loose)


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
});


////////////4,35 exchange/////////////////////////////////////////////////
// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     // request.open(method, url, async, login, passsword);
//     request.open('GET', 'chapter4.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = (inputRub.value / data.usd).toFixed(2);
//         } else {
//             inputUsd.value = request.responseText;
//             // inputUsd.value = 'Что-то пошло не так';
//         }
//         console.log(`request.readyState = ${request.readyState}`);
//         console.log(`request.status = ${request.status}`);
//         console.log(`request.statusText = ${request.statusText}`);
//         console.log(`request.response = ${request.response}`);
//         console.log(`request.responseText = ${request.responseText}`);
//     });
// });


//4.32///////////////////////////////
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






////////////////////////// jqery datatable
// $(document).ready(function() {
//     var data = [];
//     for ( var i=0 ; i<50000 ; i++ ) {
//         data.push( [ i, i, i, i, i ] );
//     }

//     $('#example').DataTable( {
//         data:           data,
//         deferRender:    true,
//         scrollY:        200,
//         scrollCollapse: true,
//         scroller:       true
//     } );
// } );