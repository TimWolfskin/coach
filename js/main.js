$(function () {
    $('.questions-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.questions-tabs__top-item').removeClass('questions-tabs__item--active');
        $(this).addClass('questions-tabs__item--active');

        $('.questions-tabs__content-item').removeClass('questions-tabs__content-item--active');
        $($(this).attr('href')).addClass('questions-tabs__content-item--active');
    });

    $('.results__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplaySpeed: 2000,
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });

});

dycalendar.draw({
    target: '#dycalendar',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton: 'show'
})