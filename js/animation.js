$(document).ready(function(){

//첫화면 이미지

var k = 1;
$(window).mousewheel(function(){
    return false;
});

/*$(".contents").mousewheel(function(e, delta){
    k = $(this).attr("data-n") -delta;
    if(k==0){
        k=1;
        return false;
    }
    if(k==5){
        k=4;
        return false;
    }
    var target = $(".con" + k).offset().top;
    $("body,html").stop().animate({"scrollTop":target});
    return false;
});*/

//상단메뉴
$(".navi li a").click(function(){
    k = $(this).attr("data-n"); 
    target = $(".con" + k).offset().top;
    $("body,html").stop().animate({scrollTop:target});
    return false;
});


$(window).scroll(function(){
    $(".navi li a").removeClass("on");

    var con1 = $(".con1").offset().top;
    var con2 = $(".con2").offset().top;
    var con3 = $(".con3").offset().top;
    var con4 = $(".con4").offset().top;

    var scroll = $(window).scrollTop();

    if(scroll < con2){
        $(".navi li a:eq(0)").addClass("on");
        k = 1;
    }else if(scroll >= con2 && scroll < con3){
        $(".navi li a:eq(1)").addClass("on");
        k = 2;
    }else if(scroll >= con3 && scroll < con4){
        $(".navi li a:eq(2)").addClass("on");
        k = 3;
    }else{
        $(".navi li a:eq(3)").addClass("on");
        $(".anim-typewriter").addClass("on").delay(300).animate({opacity:"1"});
        k = 4;
    }
});





}); //end