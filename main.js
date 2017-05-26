$(document).ready(function () {
    "use strict";
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
    
    $(".switch").on("click", function (event) {
        $(".togButton").toggleClass("change");
        $("#cashPrice").toggleClass("cashColor");
        $("#monthlyPrice").toggleClass("monthlyColor");
        event.stopPropagation();
    });
    
    /* SELECTING SUBMENUS                       */
    /* -----------------------------------------*/
    
    var $mainMenu = $("#mainMenu > li");
    var $mainMenuSub = $("#mainMenu > li > ul > li");
    
    
    $mainMenu.on("click", function () {
        $(this).children("ul").toggle(300);
    });
    
    $mainMenuSub.on("click", function (event) {
        $(this).children("ul").toggle(300);
        event.stopPropagation();
    });
    
});