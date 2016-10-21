$(function(){
	$(".scroll_nav li").click(function(){
		$(this).addClass('active_1').siblings().removeClass('active_1');
		var index=$(this).index();
		$(".scroll li").eq(index).show().siblings().hide();		
	}).eq(0).click();
	var $imgrolls=$(".scroll li");
	var index=0;
	var adTimer=null;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	$("scroll").hover(function(){
	if(adTimer){
		clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==6){
				index=0;}
			},3000);
		}).trigger("mouseleave");
function showImg(index){
	$(".scroll li").eq(index).show().siblings().hide();
}
})

