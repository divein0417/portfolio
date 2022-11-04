$(function(){
    $(".menu>li").hover(function(){
        $(this).children(".sub_menu").stop().slideDown(600);
    },function(){
        $(this).children(".sub_menu").stop().slideUp(600);
    });
});

