// JavaScript Document
// スライドイン	
$(window).scroll(function(){
    $('.js-fade-aniimation').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if(scroll>elemPos-windowHeight+200){
            $(this).stop().addClass('is_show')
        }else{
            $(this).stop().removeClass('is_show')
        }
            });
});