window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    alert('Задание №11, скрипт подключен');

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

    let deadline = '2019-06-02';

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
            domHours = timer.querySelector('.hours'), // проверь вызов через timer[0] и т.д.
            domMinutes = timer.querySelector('.minutes'),
            domSeconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function adjustClock(timeData) {
                timeData = ('' + timeData).padStart(2, '0');
                return timeData;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                domHours.textContent = '00';
                domMinutes.textContent = '00';
                domSeconds.textContent = '00';
            } else {
                domHours.textContent = adjustClock(t.hours);
                domMinutes.textContent = adjustClock(t.minutes);
                domSeconds.textContent = adjustClock(t.seconds);
            }
        }
    }
    setClock('timer', deadline);


    //модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreDetail = document.querySelectorAll('.description-btn');

    function openModal() { //функция открытия модального окна
        overlay.style.display = 'block';
        // this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', function () { //слушатель на кнопке "узнать больше"
        openModal();
    });

    for (let i = 0; i < moreDetail.length; i++) { //слушатель на кнопке "узнать подробнее" в табах
        moreDetail[i].addEventListener('click', function () {
            openModal();
        });
    }

    close.addEventListener('click', function () { //закрытие модального окна крестом
        overlay.style.display = 'none';
        // more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });



});