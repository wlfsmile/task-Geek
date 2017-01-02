window.onload=function(){
	var fram=document.getElementById('fram');
	var list=document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var back=document.getElementById('back');
	var go=document.getElementById('go');
	var index=1;
	var timer;
	var button=document.getElementById('btnLogin');
	button.onclick=function(){
	//获取页面高度，宽度
	var height=document.documentElement.scrollHeight;
	var	width=document.documentElement.scrollWidth;
	//获取可视化高度，宽度
	var oheight=document.documentElement.clientHeight;
	var owidth=document.documentElement.clientWidth;
	//遮罩层
	var omask=document.createElement("div");
		omask.id="mask";
		omask.style.height=height+'px';
		omask.style.width=width+'px';
		document.body.appendChild(omask);
	//登录框
	var ologin=document.createElement("div");
		ologin.id="login";
		ologin.innerHTML="<div id='login'><div class='login_con'><div class='login_title'><p>Login From</p></div><div class='login_mian'><input type='text' class='username' placeholder ='Username'><input type='password' class='password' placeholder='Password'><input type='button' value='Sign In' class='button'></div><div id='close'>×</div></div></div>"
		document.body.appendChild(ologin);
	//获取login的宽度，高度
	var dwidth=ologin.offsetWidth;
	var dheight=ologin.offsetHeight;
	//删除遮罩层，登录框
	var oClose=document.getElementById("close");		
	oClose.onclick=omask.onclick=function(){
		document.body.removeChild(omask);
		document.body.removeChild(ologin);	
		}
		return false;
}
	/*箭头切换*/
	function check(num){
		var newleft=parseInt(list.style.left)+num;
		list.style.left=newleft+'px';
		if(newleft<-5430){
			list.style.left=-1086+'px';
		}
		if(newleft>-1086){
			list.style.left=-5430+'px';
		}
	}
	/*按钮变亮*/
	function light(){
		for (var i = 0;i<buttons.length;i++){
			if(buttons[i].className=='bright'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='bright';
	}
	/*右箭头*/
	go.onclick=function(){
		if(index==5){
			index=1;
		}
		else{
		index+=1;		
		}
		light();
		check(-1086);
	}
	/*左箭头*/
	back.onclick=function(){
		if(index==1){
			index=5;
		}
		else{
		index-=1;		
		}
		light(); 
		check(1086);
	}
	/*按钮切换*/
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=='bright'){
				return;
			}
			var myindex=parseInt(this.getAttribute('index'));
			var num=-1086*(myindex-index);
			check(num);
			index=myindex;
			light();
		}
	}
	/*自动播放*/
	function switching(){
		timer=setInterval(function(){
			go.onclick();
		},2500);
	}
	function stop(){
		clearInterval(timer);
	}
	fram.onmouseover=stop;
	fram.onmouseout=switching;
	switching();
}