// 'use strict'; 
alert('Lesson 3-27');



////////////////////////////////ЗАДАНИЕ 11 ЧАСТЬ 2////////////////////////////////////////////////////////
// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser.call(age, 'Пупков', 'Геннадий');

////////////////////////////////////////////////////////////////////////////////////////
// let btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// function showThis() {
//     console.log(this);
// }
// showThis();
// });



// let user = {
//     name: 'John'
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smirnov'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));



// let obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         console.log(this);
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();


// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + 'has gone');
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);



////////////////////////////////////////////////////////////////////////////
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + 'has gone');
// }

// let ivan = new User('Ivan', 25);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
//////////////////////////////////////////////////////////////////////////////////////
// setTimeout(sayHello, 3000); - ВЫПОЛНЯЕТСЯ СРАЗУ КАК ЗАГРУЗИЛАСЬ СТРАНИЦА
// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello World');
// } 

// let timerId = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });
//////////////////////////////////////////////////////////////////////////
// let button = document.querySelector('.btn'),
//     box = document.querySelector('.box');

// function myAnimation() {
//     let pos = 0;
//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             box.style.top = pos + 'px';
//             box.style.left = pos + 'px';
//         }
//     }
// }
// button.addEventListener('click', myAnimation);

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
// // if (event.target && event.target.classList.contains('first')) { - ЫВРИАНТ ПОИСК КОНКРЕТНОГО КЛАССА
//     if (event.target && event.target.matches('button.first')) {
// console.log('Нажатие!');
// }
// });



























//////////////////////////////////раздел 3//////////////////////////////////
// let str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// let answer = prompt('Введите ваше имя', 'Иван');
// let reg = /n/gi;
// // console.log(answer.search(reg));
// console.log(answer.match(reg));
// console.log(reg.test());  

// let pass = prompt('введите пароль');
// console.log(pass.replace(/./g, '*'));
// alert('12-34-54'.replace(/-/g, ':'));

// let button = document.querySelectorAll('button');
// let wrap = document.querySelector('.wrapper');
// let link = document.querySelector('a');

// button[0].onclick = function() {
// alert('вы нажали первую кнопку!');
// }
// button[0].addEventListener('mouseenter', function(){ 
//     alert('вы навелись на первую кнопку');
// });

// button[0].addEventListener('click', function (event) {
//     // console.log(event);
//     // let target = event.target;
//     console.log('произошло событие: ' + event.type + ' на элементе ' +
//         event.target);
//     // target.style.display = 'none';

// });

// wrap.addEventListener('click', function () {
//     console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// link.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// button.forEach(function (item) {
//     item.addEventListener('mouseleave', function () {
//         console.log('Вышли!!');
//     });
// });


////////////////////////////////////////////////////////////////////
// let bx = document.getElementById('box'),
//     bttn = document.getElementsByTagName('button'),
//     crcl = document.getElementsByClassName('circle'),
//     hrth = document.querySelectorAll('.heart'),
//     oneHrth = document.querySelector('.heart'),
//     wrppr = document.querySelector('.wrapper');

// bx.style.backgroundColor = 'blue';
// bttn[1].style.borderRadius = '100%';
// crcl[0].style.backgroundColor = 'red';
// crcl[1].style.backgroundColor = 'orange';
// crcl[2].style.backgroundColor = 'green';


//ДВА СПОСОБА ПЕРЕБОРА ДОМ-ЭЛЕМЕНТОВ
// for (let i = 0; i < hrth.length; i++) {
//     hrth[i].style.backgroundColor = 'brown';
// }

// hrth.forEach(function (item, i, hrths) {
//     item.style.backgroundColor = 'blue';
// });

// let div = document.createElement('div');
// let text = document.createTextNode('Тут был я');
// div.classList.add('black');

//ДВА СПОСОБА ДОБАВЛЕНИЯ ДОМ-ЭЛЕМЕНТОВ В КОНЕЦ ДЕРЕВА

// document.body.appendChild(div);
// wrppr.appendChild(div);

// document.body.insertBefore(div, crcl[0]);
// document.body.removeChild(crcl[1]);
// wrppr.removeChild(hrth[1]);

// div.innerHTML = 'Hello, WORLD!';
// div.innerHTML = '<h1>Hello, WORLD!</h1>';


// div.textContent = '<h1>Hello, WORLD!</h1>';

// document.body.replaceChild(bttn[1], crcl[1]);
// console.log(div);

// console.log(bx);
// console.log(bttn);
// console.log(bttn[0]);
// console.log(crcl[2]);
// console.log(hrth[1]);
// console.log(oneHrth);





////////////////////////////////////////////////////////////////////////////////
// TO STRING 
// 1) 
// let arc = '23423';
// console.log('переменная ' + arc + ' это ' + typeof(arc));
// // 2)
// console.log('переменная ' + arc + ' это ' + typeof(parseInt(arc, 10)));

////////////////////////////////////////////////////////////////////////
// let soldier = {
// health: 400,
// armor: 100
// }

// let john = {
//     health: 100
// }

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

// ******************
// let arr = ['134df','845fsdg','345dg','dfg'],
//     i = arr.sort(compareNum);

//     function compareNum (a, b) {
//         return a-b;
//     }
//     console.log(i);

// ******************
// let arr = ['134df','345fsdg','345dg','dfg'],
//     i = arr.join('');
//     console.log(i);


// ******************
// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// ******************
// let mass = [1,2,3,4,6,7];

// for (let key of mass) {
// console.log(key)
// }




////////////////////////////////////////////////////////////////////////
// function first() {
// setTimeout( function(){
// console.log(1);
// }, 500); 
// }

// function second() {
// console.log(2);
// }

// first();
// second();

// ******************
// let a = [1, 2, 3]; 
// let b = [1, 2, 3]; 
// console.log(0 || "" || 2 || undefined || true || falsе);
// ******************
// console.log(fst);
// var fst = "внешний вар ";
// console.log(snd);

// if (fst) {
//   var snd = " внутренний вар";
//   console.log(fst);
//   console.log(snd);
// }
// console.log(fst + snd);

// alert('test2');

// let answer = confirm('Are youy here?');
// console.log(answer);
// ******************
// let answer = prompt('Are you over 18?', 'yes');
// console.log(answer);
// ******************