$(document).ready(function () {
    "use strict";

/* TOGGLING BETWEEN NAVBAR MENU LINKS */
/* ---------------------------------- */

    $("#navSearchLink").on('click', function () {
        $("#navMenuLink").removeClass("fColor");
        $(".third").removeClass("arrowpointer");
        $(this).toggleClass("fColor");

        $("#menuDiv").slideUp(300, function () {
            $(".search-dropdown-content").slideToggle(300);
            $(".first").toggleClass("arrowpointer");
        });
    });

    $("#navMenuLink").on('click', function () {
        $("#navSearchLink").removeClass("fColor");
        $(".first").removeClass("arrowpointer");
        $(this).toggleClass("fColor");

        $(".search-dropdown-content").slideUp(300, function () {
            $("#menuDiv").slideToggle(300);
            $(".third").toggleClass("arrowpointer");
        });
    });

    /* SELECTING SUBMENUS                       */
    /* -----------------------------------------*/

    var $mainMenu = $("#mainMenu > li"),
        $mainMenuSub = $("#mainMenu > li > ul > li");


    $mainMenu.on("click", function () {
        $(this).find("i").eq(0).toggleClass("fa-plus-circle fa-minus-circle");
        $(this).children("ul").toggle(300);
    });

    $mainMenuSub.on("click", function (event) {
        $(this).find("i").toggleClass("fa-plus-circle fa-minus-circle");
        $(this).children("ul").toggle(300);
        event.stopPropagation();
    });

/* TOGGLE SWITCH */
/* ------------- */

    $(".switch").on("click", function (event) {
        $(".togButton").toggleClass("change");
        $("#cashPrice").toggleClass("cashColor");
        $("#monthlyPrice").toggleClass("monthlyColor");
        event.stopPropagation();
    });



/* BANNER ANIMATION FOR MOBILE */
/* -------------------------- */

    /* DECLARATION */
    var width = 100,
        animationSpeed = 800,
        pause = 4000,
        currentSlide = 1;

    /* cache DOM */
    var $slider = $(".barSlider");
    var $slideContainer = $slider.find(".slides");
    var $slides = $slideContainer.find(".slide");

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left': '-=' + width + '%'}, animationSpeed, function () {
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css("margin-left", 0);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

    startSlider();


    /* MAIN SLIDES ANIMATION FOR MOBILE */
    /* -------------------------- */

  /* DECLARATION */
    var width2 = 100,
        animationSpeed2 = 1000,
        pause2 = 5000,
        currentSlide2 = 1;

    /* cache DOM */
    var $slider2 = $(".mainSlider"),
        $slideContainer2 = $slider2.find(".slides"),
        $slides2 = $slideContainer2.find(".slide"),
        $dots = $(".dots"),
        interval2;

    function startSlider2() {
        interval2 = setInterval(function () {
            $slideContainer2.animate({'margin-left': '-=' + width2 + '%'}, animationSpeed2, function () {
                currentSlide2++;
                
                if (currentSlide2 === $slides.length) {
                    currentSlide2 = 1;
                    $slideContainer2.css("margin-left", 0);
                }
            });
        }, pause2);
    }

    function stopSlider2() {
        clearInterval(interval2);
    }

    $slider2.on("mouseenter", stopSlider2).on("mouseleave", startSlider2);

    startSlider2();


});
