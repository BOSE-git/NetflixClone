$(document).ready(function(){
    $(window).bind('scroll', function(){
        var gap = 50;
        if($(window).scrollTop() > gap){
            $('nav').addClass('active');
        }
        else{
            $('nav').removeClass('active');
        }
    });
});