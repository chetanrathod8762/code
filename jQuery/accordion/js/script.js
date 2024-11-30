$(document).ready(function() {
    $(".accordian__trigger").click(function() {
        $(".accordian__trigger").removeClass("active");
        $(this).next().slideToggle();
        $(this).addClass("active");
    });
});