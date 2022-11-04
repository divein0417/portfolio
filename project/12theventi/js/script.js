/*퀵메뉴*/
$(document).ready(function(){
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function() {
      var position = $(window).scrollTop(); 
      $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000);
    });
});

/*lnb클릭*/
var clickEvent = function(){
    $(".lnb ul li").click(function(){
        $(ul)
    });
}