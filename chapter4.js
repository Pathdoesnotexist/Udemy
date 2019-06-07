/* eslint-disable no-console */
// 'use strict'; 
alert('Lesson 4-35');


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => { 
    let request = new XMLHttpRequest();

        // request.open(method, url, async, login, passsword);
        request.open('GET', 'chapter4.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('readystatechange', function(){
            if (request.readyState === 4 && request.status == 200) {
                let data = JSON.parse(request.response);

                inputUsd.value = (inputRub.value / data.usd).toFixed(2);
            } else {
                inputUsd.value =  request.responseText;
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