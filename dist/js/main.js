$(function(){"use strict";$(window).on("scroll",function(){var s=$(window).scrollTop(),o=$("header");200<s?o.hasClass("sticky")||o.addClass("sticky"):o.removeClass("sticky")}),$.scrollUp({scrollName:"scrollUp",topDistance:"300",topSpeed:300,animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:'<i class="fas fa-level-up-alt scrollUp"></i>',activeOverlay:!1}),$(".main-slider .slider-list").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!1,centerPadding:0,centerMode:!0,focusOnSelect:!0,responsive:[{breakpoint:1400,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1199,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".popup").magnificPopup({type:"image",gallery:{enabled:!0}}),$(".feedback-slider .slider-list").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:1e4,centerMode:!0,dots:!0,dotsClass:"dots",arrows:!0,nextArrow:"<i class='fas fa-long-arrow-alt-right'></i>",prevArrow:"<i class='fas fa-long-arrow-alt-left'></i>",responsive:[{breakpoint:1400,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}},{breakpoint:1199,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1}}]}),(new WOW).init(),$("header nav ul").onePageNav({currentClass:"active",scrollSpeed:1e3})});