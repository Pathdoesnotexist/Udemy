
let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    menuItem = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'), 
    adv = document.querySelector('.adv'),
    userOpinion = document.getElementById('prompt');

// Восстановить порядок в меню
menu.insertBefore(menuItems[1], menuItems[3]);

//добавить пятый пункт
menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
menu.appendChild(menuItem);

//Заменить картинку заднего фона на другую из папки img - СДЕЛАНО ЧЕРЕЗ СSS !РЕШЕНО НЕВЕРНО!
document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = 'Мы продаем только подлинную технику Apple';

//Удалить рекламу со страницы
column[1].removeChild(adv);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let userText = prompt('Какое у вас отношение к технике Apple?', 'Сюда пиши, да');
userOpinion.textContent = userText;