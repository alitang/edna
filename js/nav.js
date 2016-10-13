$(document).ready(function () {

    $('#open').click(function () {
        $('.overlay').css('width', '100%');
        $('.overlay #close').css('visibility', 'visible');
        $('.overlay-content a').css('transition', '0.5s');
        if (window.matchMedia("(orientation:portrait").matches) {
            //orientation is portrait
            $('.overlay-content a').css('font-size', '8vw');
        } else { 
            //orientation is landscape
            $('.overlay-content a').css('font-size', '5vw');
        }; 
    });

    $('#hiddenNav.overlay #close').click(function () {
        $('.overlay').css('width', '0');
        $('.overlay #close').css('visibility', 'hidden');
        $('.overlay-content a').css('transition', '0s');
        $('.overlay-content a').css('font-size', '0');
    });
});