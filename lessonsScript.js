// 'use strict';









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