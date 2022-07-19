// JavaScript Document

$(function()
{	
	var bars = '.jspHorizontalBar, .jspVerticalBar';
	$('.content').bind('jsp-initialised', function (event, isScrollable) {
	//hide the scroll bar on first load
		$(this).find(bars).hide();	
	}).jScrollPane().hover(
		//hide show scrollbar
		function () {
			$(this).find(bars).stop().fadeTo('fast', 0.9);
		},
		function () {
			$(this).find(bars).stop().fadeTo('fast', 0);
		}
	);	
	
	
	$(".Lyricdetail").hide();
	$(".Lyrictitle").click(function(e) {
        $(".Lyricdetail").slideToggle("fast");
    });
				
});

// function noMenuOne() 
// { 
// 	return false; 
// } 
// document.oncontextmenu = noMenuOne; 
// //方法二 
// function noMenuTwo() 
// { 
// 	if(event.button == 2) 
// 	{ 
// 		return false; 
// 	} 
// } 
// document.onmousedown = noMenuTwo; 

//    // Forbid Copy     
//    function rt() 
//    {
//        return true; 
//    }  
//    function rf()
//    {
//        return false;
//    } 
//    // IE,Chrome
//    document.oncontextmenu = rf;
//    document.onselectstart = rf;
//    document.ondragstart = rf;  
//
//    $(document).ready(function(){
//        $("#ctl00_ContentBody_searchTextBox").mousedown(function(){
//            //IE 
//            document.oncontextmenu = rt;
//            document.onselectstart = rt;
//            document.ondragstart = rt;  
//            //Firefox
//            $("body").css("-moz-user-select","-moz-none");     
//            
//   });
//   $("#ctl00_ContentBody_searchTextBox").mouseout(function(){
//    //IE
//    document.oncontextmenu = rf;
//            document.onselectstart = rf;
//            document.ondragstart = rf; 
//            //Firefox
//            $("body").css("-moz-user-select","none");    
//   });
//   //Firefox
//   $("body").css("-moz-user-select","none");    
//    });
//
//document.oncontextmenu=new Function("event.returnValue=false");
//document.onselectstart=new Function("event.returnValue=false");

// function disableselect(e){
// return false}
// function reEnable(){return true
// }
// file://if IE4+
// document.onselectstart=new Function ("return false")
// file://if NS6
// if (window.sidebar){
// document.onmousedown=disableselect
// document.onclick=reEnable
// }

<!--
function MM_reloadPage(init) {    //reloads the window if Nav4 resized
    if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
      document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
    else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->

