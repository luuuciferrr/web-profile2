$(document).ready(function(){

    $(".thumbnail li:eq(0)").bind("click",function(){
        $(".main_image img").attr("src","images/img1.png");
        $(".circle, .circle2").css("backgroundColor","#027142");
    });

    $(".thumbnail li:eq(1)").bind("click",function(){
        $(".main_image img").attr("src","images/img2.png");
        $(".circle, .circle2").css("backgroundColor","#EF81A1");
    });

    $(".thumbnail li:eq(2)").bind("click",function(){
        $(".main_image img").attr("src","images/img3.png");
        $(".circle, .circle2").css("backgroundColor","#8E6DAF");
    });



    /*$(".menu_btn").click(function(){
        $(".m_navi_wrap").animate({right:"0"},"slow");
    });
    $(".close_btn").click(function(){
        $(".m_navi_wrap").animate({right:"-100%"},"slow");
    })*/

    $(".m_navi_wrap").hide();
    $(".menu_btn").click(function(){
         $(".m_navi_wrap").fadeIn();
    });
    $(".close_btn").click(function(){
         $(".m_navi_wrap").fadeOut();
        return false;
    });



}); //end