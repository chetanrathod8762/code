$(document).ready(function() {
    $(".tab_content_box:first").show();
    $(".tab_trigger  a:first").addClass("active");
    $(".tab_trigger a").click(function() {
        $(".tab_trigger a").removeClass("active");
        $(this).addClass("active");
        $(".tab_content_box").hide();
        var data = $(this).attr("href");
        $(data).show();
        return false;
    });
});