$(document).ready(function () {
    // FIXED NAVBAR
    $(".js--section-about").waypoint(function (direction) {
        if (direction == "down") {
            $(".js--nav").addClass("stick")
        } else {
            $(".js--nav").removeClass("stick")
        }
        
    },{
        offset:"60px"
    })




    // LINKING NAVS AND BUTTONS
    $(".link-home").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-home").offset().top}, 1000)
    })
    $(".link-about").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-about").offset().top}, 1000)
    })
    $(".link-exp").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-exp").offset().top}, 1000)
    })
    $(".link-work").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-works").offset().top}, 1000)
    })
    $(".link-contact").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-contact").offset().top}, 1000)
    })

    // RESPONSIVE MENU ICONS 
    $(".js--menu-icon").click(function () {
        var menu = $(".js--menu-icon")
        if (menu.hasClass("ti-menu")) {
            menu.addClass("ti-close")
            menu.removeClass("ti-menu")
        }else {
            menu.addClass("ti-menu")
            menu.removeClass("ti-close")
        }
    })

})