$(function(){
	var num=$(".scroll_nav li");
	len=num.length;
	//头部导航滑过
	$(".header li").mouseover(function(){
		$(this).addClass('active');
	}).mouseout(function(){
		$(this).removeClass('active');	
	});
	//图片滚动导航
	$(".scroll_nav li").click(function(){
		$(this).addClass('active_1').siblings().removeClass('active_1');
		var index=$(this).index();
		i=index;
		$(".scroll li").eq(index).show().siblings().hide();		
	}).eq(0).click();
	//图片滑动
	var i=0;
	var timer=setInterval(showImg,3000);
	function showImg(){
		i++;
		if (i==len) {
			i=0;
		}
		$(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
		$(".scroll li").eq(i).show().siblings().hide();
	}
	$(".scroll").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(showImg,3000);
	})
	//点击箭头
	$("#next").click(function(){
		i++;
		if (i==len) {
			i=0;
		}
		$(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
		$(".scroll li").eq(i).show().siblings().hide();
	});
	$("#prev").click(function(){
		i--;
		if (i==-1) {
			i=len-1;
		}
		$(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
		$(".scroll li").eq(i).show().siblings().hide();
	});

	//右侧更新
	$(".icon1").parent("span").mouseover(function(){
		$("#mod1").show().siblings().hide();
	})
	$(".icon2").parent("span").mouseover(function(){
		$("#mod2").show().siblings().hide();
	})
	$(".icon3").parent("span").mouseover(function(){
		$("#mod3").show().siblings().hide();
	})
	$("#box_title span").mouseover(function(){
		$(this).addClass('select').siblings().removeClass('select');
	});
//左侧导航
	$(".aside_nav li").has("ul").hover(function(){
		$(this).children("ul").slideDown();
	},function(){
		$(this).children("ul").hide();
	});
//中间文章图片
	/*$(".comment_art li a").mouseover(function(){
		$(this).children().show();
	})*/
//尾部变化
	$("inner_picture a").mouseover(function(){
		$(this).addClass('active_1');
	})


})