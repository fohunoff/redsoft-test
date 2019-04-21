'use strict';

(function () {
    var slider = document.querySelector('.slider');
    var sliderBody = slider.querySelector('.slider__body');
    var slides = slider.querySelectorAll('.slide');
    var handler = document.querySelector('.handler');

    var COUNT = 0;
    var TIMEOUT = 5000;
    var windowWidth = window.innerWidth;

    window.addEventListener('resize', function () {
        windowWidth = window.innerWidth;
    });

    /**
     * 
     * @param {Int} listLength - число слайдов
     * @param {*} parentNode - элемент, куда всавляется счётчик слайдов
     * 
     */
    var createHandler = function (listLength, parentNode) {
        var ul = document.createElement('ul');
        var setActive = true;
        ul.classList.add('handler__list');

        for (var i = 0; i < listLength; i++) {
            var li = document.createElement('li');
            li.classList.add('handler__item');
            setActive ? li.classList.add('handler__item--active') : null;
            setActive = false;

            ul.appendChild(li);
        }

        parentNode.appendChild(ul);
    }

    /**
     * Двигаем слайды по кругу
     */
    var moveSlide = function () {
        var handlerItems = slider.querySelectorAll('.handler__item');

        sliderBody.style.transform = 'translateX(-' + (windowWidth - 20) * COUNT + 'px)';
        [].map.call(handlerItems, item => item.classList.remove('handler__item--active'));
        handlerItems[COUNT].classList.add('handler__item--active');

        COUNT++;
        COUNT % slides.length === 0 ? COUNT = 0 : null;
    };

    createHandler(slides.length, handler);
    setInterval(moveSlide, TIMEOUT);

    moveSlide();

})();