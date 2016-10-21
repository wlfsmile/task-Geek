$(function(){
	$(".header li").mouseover(function(){
		$(this).addClass('active');
	}).mouseout(function(){
		$(this).removeClass('active');	
	});
	$(".scroll_nav li").click(function(){
		$(this).addClass('active_1').siblings().removeClass('active_1');
		var index=$(this).index();
		$(".scroll li").eq(index).show().siblings().hide();		
	}).eq(0).click();
})