$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var navHeight = $('nav').outerHeight();
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 900) {
            $('body').css('padding-top', navHeight);
        }
        else
        {
            $('body').css('padding-top','0');
        }
    }
});

$('#btn-m-menu').click(function() {
    $('.m-menu').css('display', 'flex');
});

$('.cancel').click(function() {
    $('.m-menu').css('display', 'none');
});

$('.dr').hover(function() {
    $('.dr-menu').css('display', 'flex');
}, function() {
    $('.dr-menu').css('display', 'none');
})