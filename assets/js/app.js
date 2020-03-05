$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#arrowUpBtn').fadeIn();
    } else {
        $('#arrowUpBtn').fadeOut();
    }
});

$("#arrowUpBtn").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });