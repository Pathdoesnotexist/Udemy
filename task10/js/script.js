window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    alert('Задание №10, скрипт подключен');

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //ТАЙМЕР

    let deadline = '2019-05-29';

    function getTimeRemaining(endtime) { //ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ОСТАВШЕГОСЯ ВРЕМЕНИ
        let timeRemaining = Date.parse(endtime) - Date.parse(new Date()), //сколько осталось мс от текущей даты до дедлайна
            seconds = Math.floor((timeRemaining / 1000) % 60), //в секундах до целой минуты
            minutes = Math.floor((timeRemaining / 1000 / 60) % 60), // в минутах до целого часа
            hours = Math.floor(timeRemaining / 1000 / 60 / 60); //в часах всего
        // проверить использование .getHours(); .getMinutes(); .getSeconds();

        return {
            'total': timeRemaining,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) { //Интеграция таймера в ДОМ
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'), // проверь вызов через timer[0] и т.д.
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;

            // if (t.total <= 0) {
            //     clearInterval(timeInterval);
            // }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            } else {
                if (t.hours < 10) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
            }

        }
    }
    setClock('timer', deadline);

});