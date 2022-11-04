/* 팝업 스크립트 */
function Func(){
    $(".popup").show(400);
}$(function(){
    $(".close_btn").click(function(){
        $(".popup").hide();
    });
});

/* gnb 스크립트 */
$(function(){
    $(".menu>li").hover(function(){
        $(this).children(".sub_menu").stop().slideDown(800);
    },function(){
        $(this).children(".sub_menu").stop().slideUp(800);
    });
});


var timer = setInterval(slideAuto(), 2000);
function slideAuto(){
    $(".slide_box>div").animate({"margin-top":"-350px"},function(){
        $(".slide_box>div>div:nth-child(1)").appendTo(".slide_box>div");
        $(".slide_box>div").css("margin-top","0");
    });
}

$(function(){
    $(".slide_box>div").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slideAuto(), 2000);
    });
});

setInterval(() => { // 문서 실행하자마자 적용되는 타이머 함수
    slideAuto()
}, 2000);


