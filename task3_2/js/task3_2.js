window.onload=function(){
	var fram=document.getElementById('fram');
	var list=document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var back=document.getElementById('back');
	var go=document.getElementById('go');
	var index=1;
	var timer;
	/*箭头切换*/
	function check(num){
		var newleft=parseInt(list.style.left)+num;
		list.style.left=newleft+'px';
		if(newleft<-3000){
			list.style.left=-600+'px';
		}
		if(newleft>-600){
			list.style.left=-3000+'px';
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
		check(-600);
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
		check(600);
	}
	/*按钮切换*/
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=='bright'){
				return;
			}
			var myindex=parseInt(this.getAttribute('index'));
			var num=-600*(myindex-index);
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