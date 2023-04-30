$(function () {
    'use strict';

    // Sticky Navbar
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var header = $('header');
        if (scroll > 200) {
            if (!header.hasClass('sticky')) {
                header.addClass('sticky');
            }
        } else {
            header.removeClass('sticky');
        }
    });

    // scrollUp
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-level-up-alt scrollUp"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    // Slick Slider
    $(".main-slider .slider-list").slick({
        //mobileFirst
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerPadding: 0,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // images popup
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    // Feedback Slider
    $('.feedback-slider .slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
        dots: true,
        dotsClass: "dots",
        arrows: true,
        nextArrow: "<i class='fas fa-long-arrow-alt-right'></i>",
        prevArrow: "<i class='fas fa-long-arrow-alt-left'></i>",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    // run wow
    new WOW().init()

    // One-page-nav
    $('header nav ul').onePageNav({
        currentClass: 'active',
        scrollSpeed: 1000
    });

});
