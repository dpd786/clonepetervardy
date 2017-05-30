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

    var $mainMenu = $("#mainMenu > li");
    var $mainMenuSub = $("#mainMenu > li > ul > li");


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
    var width = 100;
    var animationSpeed = 800;
    var pause = 5000;
    var currentSlide = 1;

    /* cache DOM */
    var $slider = $(".barSlider");
    var $slideContainer = $slider.find(".slides");
    var $slides = $slideContainer.find(".slide");

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({'margin-left': '-='+width+'%'}, animationSpeed, function () {
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





});
