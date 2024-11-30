$(document).ready(function() {
    $(".modal__open").click(function() {
        // $(".modal").addClass("active");
        var data = $(this).attr("href");
        // $(data).show();
        $(data).addClass("show");
        return false;
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("show");
        // $(".modal").hide();
    });
    $('body').css("overflow", "hidden");
});