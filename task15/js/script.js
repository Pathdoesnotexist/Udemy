window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    alert('Задание №15, скрипт подключен');

    //СОЗДАЕМ РАБОТАЮЩИЕ ТАБЫ

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

    let deadline = '2019-06-15';

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

    //ФОРМА ОБРАТНОЙ СВЯЗИ
    //ДЛЯ ПРОВЕРКИ РАБОТЫ НУЖЕН ЛОКАЛЬНЫЙ СЕРВЕР!!

    let message = { // содержит различные состояния запроса
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input');

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //текстовый php отсылается
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json отсылается

        let formData = new FormData(form); //получаем ответ пользователя в виде пары ключ-значение

        let obj = {}; //ТАК КАК ФОРМ ДАЕТ НЕСТАНДАРТНЫЙ ТИП ОБЪЕКТА ДЛЯ STRINGIFY НЕОБХОДИМО СОЗДАТЬ ИЗ НЕГО ОБЫЧНЫЙ ОБЪЕКТ
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj); //преобразуем в JSON формат

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    // СОЗДАЕМ СЛАЙДЕР

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) { //функция показа абстрактного слайда

        if (n > slides.length) { //прокрутка на первый слайд
            slideIndex = 1;
        }

        if (n < 1) { //прокрутка на последний слайд
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //СКРЫВАЕМ ВСЕ СЛАЙДЫ
        dots.forEach((item) => item.classList.remove('dot-active')); //УБИРАЕМ ВЫДЕЛЕНИЕ С ТОЧКИ НАВИГАЦИИ
        // for(let i = 0; i < slides.length;i++){     старый допустимый вариант написания
        //     slides[i].style.display = 'none'
        // }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides(n) { //пролистывание вперед
        showSlides(slideIndex += n);
    }

    function currentSlide(n) { // показ конкретного слайда
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){ //слушатель пролистывания назад
        plusSlides(-1);
    });

    next.addEventListener('click', function(){ //слушатель пролистывания вперед
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for(let i = 0; i < dots.length + 1; i++){
            if (event.target.classList.contains('dot') && event.target == dots[i-1]){
                currentSlide(i);
            }
        }
    });

});