
window.onload=function(){
	page({
		id:'pagin',
		now_num:4 ,
		all_num:10,
		callBack:function(now,all){
		var main=document.getElementById('main');
		main.innerHTML=(data[now-1].tiele+"</br>"+data[now-1].con);		
	}
	});
};
var data=[
{
	"tiele":"第一页",
	"con":"我不知道",
},
{
	"tiele":"第二页",
	"con":"我真不知道"
},
{
	"tiele":"第三页",
	"con":"我是真的不知道"
},
{
	"tiele":"第四页",
	"con":"我是真的真的不知道"
},
{
	"tiele":"第五页",
	"con":"我实在不知道"
},
{
	"tiele":"第六页",
	"con":"我是实在不知道"
},
{
	"tiele":"第七页",
	"con":"我是实在不知道写什么不知道"
},
{
	"tiele":"第八页",
	"con":"我还是不知道"
},

{
	"tiele":"第九页",
	"con":"我还是不知道，你打死我吧"
},
{
	"tiele":"第十页",
	"con":"我就是不知道，你也打不死我"
},
]
function page(opt){
	if (!opt.id) {
		return false
	};
	var obj=document.getElementById(opt.id);
	var now_num=opt.now_num||1;
	var all_num=opt.all_num||5;
	var callBack=opt.callBack||function(){};
	if(now_num>=4&&all_num>=6){
	var oa=document.createElement('a');
	oa.href='#1';
	oa.innerHTML='首页';
	obj.appendChild(oa);	
	}
	if(now_num>=2){
	var oa=document.createElement('a');
	oa.innerHTML='<上一页';
	oa.href='#'+(now_num-1);
	obj.appendChild(oa);	
	}
	if (all_num<=5) {
		for(var i=1;i<=5;i++){
			var oa=document.createElement('a');
			oa.href='#'+i;
			if(now_num==i){
				oa.innerHTML=i;
			}
			else{
			oa.innerHTML='['+i+']';
		}
			obj.appendChild(oa);
		}
	}
	else{
		for(var i=1;i<=5;i++){
			var oa=document.createElement('a');
			if(now_num==1||now_num==2){
				oa.href='#'+i;
				if(now_num==i){
					oa.innerHTML=i;
				}
				else{
					oa.innerHTML='['+i+']';
				}
			}
			else if((all_num-now_num)==1||(all_num-now_num)==0){
				oa.href='#'+(all_num-5+i);
					if((all_num-now_num)==0&&i==5){
						oa.innerHTML=all_num-5+i;
					}
					else if((all_num-now_num)==1&&i==4){
						oa.innerHTML=all_num-5+i;
					}
					else{
						oa.innerHTML='['+(all_num-5+i)+']';
					}
			}
			else{
			
				oa.href='#'+(now_num-3+i);
				if(i==3){
					oa.innerHTML=now_num-3+i;
				}
				else{
					oa.innerHTML='['+(now_num-3+i)+']';
				}}
				obj.appendChild(oa);
		}	
	}
	if((all_num-now_num)>=1){
		var oa=document.createElement('a');
		oa.href='#'+(now_num+1);
		oa.innerHTML='下一页>';
		obj.appendChild(oa);

	}
	if((all_num-now_num)>=3&&all_num>=6){
		var oa=document.createElement('a');
		oa.href='#'+all_num;
		oa.innerHTML='尾页';
		obj.appendChild(oa);
	}
	callBack(now_num,all_num);
	var aa= obj.getElementsByTagName('a');
	for(var i=0;i<aa.length;i++){
		 aa[i].onclick=function(){
			var now_num=parseInt(this.getAttribute('href').substring(1));
			obj.innerHTML='';
			page({
				id:opt.id,
 				now_num:now_num,
 				all_num:all_num,
 				callBack:callBack
			});
			return false;
		};
	}
}