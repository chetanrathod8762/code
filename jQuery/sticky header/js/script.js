$(document).ready(function() {
    var stickyHeaders = (function() {

        var $window = $(window),
            $stickies;

        var load = function(stickies) {

            if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

                $stickies = stickies.each(function() {

                    var $thisSticky = $(this).wrap('<div class="followWrap" />');

                    $thisSticky
                        .data('originalPosition', $thisSticky.offset().top)
                        .data('originalHeight', $thisSticky.outerHeight())
                        .parent()
                        .height($thisSticky.outerHeight());
                });

                $window.off("scroll.stickies").on("scroll.stickies", function() {
                    _whenScrolling();
                });
            }
        };

        var _whenScrolling = function() {

            $stickies.each(function(i) {

                var $thisSticky = $(this),
                    $stickyPosition = $thisSticky.data('originalPosition');

                if ($stickyPosition <= $window.scrollTop()) {

                    var $nextSticky = $stickies.eq(i + 1),
                        $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

                    $thisSticky.addClass("fixed");

                    if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

                        $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
                    }

                } else {

                    var $prevSticky = $stickies.eq(i - 1);

                    $thisSticky.removeClass("fixed");

                    if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

                        $prevSticky.removeClass("absolute").removeAttr("style");
                    }
                }
            });
        };

        return {
            load: load
        };
    })();

    $(function() {
        stickyHeaders.load($(".followMeBar"));
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
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

/*  */
$(document).ready(function() {
    $(".menu-btn a").click(function() {
        $(".nav").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $(".Submenu-i a").click(function() {
        $("Submenu-i a").removeClass("active");
        $(this).addClass("active");
        $(this).next().slideToggle();
        $(".Submenu").hide();
        var data = $(this).attr("href");
        $(data).show();
        return false;
    });
});