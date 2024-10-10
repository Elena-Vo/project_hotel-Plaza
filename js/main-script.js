$(document).ready(function(){
    $('.slider').slick({
        vertical: true,  /* Вертикальный слайдер */
        dots: true,      /* Добавляем индикаторы */
        autoplay: true,  /* Автоматическая прокрутка */
        arrows: true,     /* Стрелки навигации */
        autoplaySpeed: 2000,
        verticalSwiping: true
    });
});