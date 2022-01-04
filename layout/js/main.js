$(document).ready(function() {

    // preloader
    $(window).ready(function() {
        $('#preloader').css('display', 'none');
    });

    let start = 0;
    let end = $('.num1').html();
    let speed = 2;

    setInterval(function() {
        if (start < end) {
            start++;
        }
        $('.num1').html(start);
    }, speed);


    let start2 = 0;
    let end2 = $('.num2').html();
    let speed2 = 2;

    setInterval(function() {
        if (start2 < end2) {
            start2++;
        }
        $('.num2').html(start2);
    }, speed);


    let start3 = 0;
    let end3 = $('.num3').html();
    let speed3 = 2;

    setInterval(function() {
        if (start3 < end3) {
            start3++;
        }
        $('.num3').html(start3);
    }, speed);

    /* bottombar fixed on scroll*/
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("btmBar").style.position = "fixed";
            document.getElementById("btmBar").style.width = "100%";
            document.getElementById("btmBar").style.backgroundColor = "#1b1c1e";
            document.getElementById("btmBar").style.top = "0";
            document.getElementById("btmBar").style.zIndex = "999";
            document.getElementById("btmBar").style.transition = "5";

        } else {

            document.getElementById("btmBar").style.position = "relative";
            document.getElementById("btmBar").style.width = "100%";
            document.getElementById("btmBar").style.backgroundColor = "transparent";
            document.getElementById("btmBar").style.top = "0";
            document.getElementById("btmBar").style.zIndex = "999";
        }
    }


})