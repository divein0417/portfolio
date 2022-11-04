/*util 검색버튼*/
$(function(){
    $(".util>.search").click(function(){
        $(this).toggleClass
        ("aniMenu");
        $(".search_bar").fadeToggle(100);
    });
});

/*gnb*/
$(function(){
    $(".menu>li").hover(function(){
        $(this).children(".sub_menu").stop().slideDown(600);
    },function(){
        $(this).children(".sub_menu").stop().slideUp(600);
    });
});
