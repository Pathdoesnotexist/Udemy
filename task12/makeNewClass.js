// 'use strict';
alert('скрипт подключен');

class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
        }

        createDiv(){
            let div = document.createElement('div');
                let body = document.querySelector('body');
                body.appendChild(div);
                // ДАЛЕЕ КОД УЧИТЕЛЯ
            let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
            div.style.cssText = param;
        }
    }
    
    const item = new Options(300, 350, "red", 14, "center");
    
    item.createDiv();


// Используя синтаксис ES6 в отдельном документе:
// ·        Создать класс options
// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign
// ·        Он должен содержать метод, создающий новый div на странице,
//              записывающий в него любой текст и при помощи cssText изменять свой стиль
//              из переданных параметров
// ·        Создать новый объект через класс
// ·        Вызвать его метод и получить элемент на странице