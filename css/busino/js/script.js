$(document).ready(function() {
    $(document).ready(function() {
        $(".counter").counterUp({
            delay: 10,
            time: 1000
        });
    });
    $('.services-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
    $('.blog-slider').owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    });
    // $('.single-item').slick({
    //     mouseDrag: true;
    // });
    $('.multiple-items').slick({
        infinite: true,
        // touchDrag: true,
        // slickPlay: block,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function() {
    $(".modal__open").click(function() {
        // $(".modal").addClass("active");
        var data = $(this).attr("href");
        // $(data).show();
        $(data).addClass("show");
        $('body').css("overflow", "hidden");
        return false;
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("show");
        $('body').css("overflow", "auto");
        // $(".modal").hide();
    });
});

/* */

$(document).ready(function() {
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});


/* */


$(document).ready(function() {
    $(".btn-open").click(function() {
        $(".background-color").css({
            display: 'block'
        });
    });
    $(".btn-close").click(function() {
        $(".background-color").css({
            display: 'none'
        });
    });
});