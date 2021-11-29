$(document).ready(function(){

$(".menu_btn").click(function(){
    $(".m_navi_wrap").animate({"right":"0"}, "fast");
    return false;
});
$(".close_btn").click(function(){
    $(".m_navi_wrap").animate({"right":"-100%"}, "fast");
});



}); //end