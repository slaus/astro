//Scripts
//Smooth scrolling of the page when you click on the menu
$(function () {
    $(".smooth-scroll").on("click", function (event) {
        var menu = $(this).attr('href');

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 1500);

    });
});

//Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

var menu_selector = ".menu";

function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        // console.log(hash);
        var target = $(hash);
        if (target.position().top - 30 <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            // $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $("a[href^=#]").click(function(e){
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");

        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            //window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });

    $('.item').matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        }
    );

});
