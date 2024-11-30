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