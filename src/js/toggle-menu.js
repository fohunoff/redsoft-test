'use strict';

(function () {
    var button = document.querySelector('.button--toggle-menu');
    var menu = document.querySelector('.nav__mobile');

    button.addEventListener('click', function () {
        button.classList.toggle('close');
        menu.classList.toggle('nav__mobile--show');
    })
})();