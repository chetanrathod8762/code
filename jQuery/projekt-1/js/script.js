$(document).ready(function() {
    $("#hide").click(function() {
        $("p:first , h1").hide();
    });
    $("#show").click(function() {
        $("p:first , h1").show();
    });
    $(".hello").dblclick(function() {
        $(".hello").hide();
    });
    $(".alert").hover(function() {
        alert("hii sir");
        alert("bay sir");
        alert("byyybyyy")
    });
    $("input").focus(function() {
        $(this).css("background-color", "green");
    });
    $("input").blur(function() {
        $(this).css("background-color", "red");
    });
});
$(document).ready(function() {
    $(".on").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        },
        click: function() {
            $(this).css("color", "yellow");
        }
    });
});
$(document).ready(function() {
    $(".car-button").click(function() {
        $(".car-info").toggle();
    });
    $(".car-button").click(function() {
        $(".img").animate({
            left: '120px',
            opacity: '0.5',
            height: '200px',
            width: '200px'
        });
    });
});
$(document).ready(function() {
    $(".car-info").mouseenter(function() {
        $(this).css("background-color", "lightgray");
    });
    $(".car-info").mouseleave(function() {
        $(this).css("background-color", "lightblue");
    });
    $(".car-info").click(function() {
        $(this).css("color", "yellow");
    });
});
$(document).ready(function() {
    $(".animate").click(function() {
        var chetan = $(".chetan");
        chetan.animate({ height: '300px', opacity: '0.4' }, "slow");
        chetan.animate({ width: '300px', opacity: '0.4' }, "slow");
        chetan.animate({ height: '100px', opacity: '0.4' }, "slow");
        chetan.animate({ width: '100px', opacity: '0.4' }, "slow")
    });
});
$(document).ready(function() {
    $(".sll").click(function() {
        $(".car-1").css({
            display: 'none'
        });
        $(".car-1, .car-2, .car-3").css({
            display: 'block'
        });
    });
    $(".nikul").click(function() {
        $(".car-1").css({
            display: 'none'
        });
        $(".car-2, .car-3").css({
            display: 'block'

        });
    });
    $(".rahul").click(function() {
        $(".car-1, .car-2").css({
            display: 'none'
        });
    });
});

$(document).ready(function() {
    $(".slide-up-1").click(function() {
        $(".slide-down-1").slideToggle();
        $(".slide-down-2,.slide-down-3,.slide-down-4").css({
            display: 'none'
        });
        $(".slide-up-1").css("background-color", "lightblue");
        $(".slide-up-2,.slide-up-3,.slide-up-4").css(
            "background-color", "#e5eecc");
    });
    $(".slide-up-2").click(function() {
        $(".slide-down-2").slideToggle();
        $(".slide-down-1,.slide-down-3,.slide-down-4").css({
            display: 'none'
        });
        $(".slide-up-2").css("background-color", "lightblue");
        $(".slide-up-1,.slide-up-3,.slide-up-4").css(
            "background-color", "#e5eecc");
    });
    $(".slide-up-3").click(function() {
        $(".slide-down-3").slideToggle();
        $(".slide-down-1,.slide-down-2,.slide-down-4").css({
            display: 'none'
        });
        $(".slide-up-3").css("background-color", "lightblue");
        $(".slide-up-2,.slide-up-1,.slide-up-4").css(
            "background-color", "#e5eecc");
    });
    $(".slide-up-4").click(function() {
        $(".slide-down-4").slideToggle();
        $(".slide-down-1,.slide-down-2,.slide-down-3").css({
            display: 'none'
        });
        $(".slide-up-4").css("background-color", "lightblue");
        $(".slide-up-2,.slide-up-3,.slide-up-1").css(
            "background-color", "#e5eecc");
    });
});

$(document).ready(function() {
    $(".item").click(function() {
        $(this).toggleClass("show");
        $(this).siblings().removeClass("show");
    });
});