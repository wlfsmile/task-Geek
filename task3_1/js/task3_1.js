
function getLength(str){
  return str.replace(/[^\x00-\xff]/g, "xx").length;
}
function check(mychar){
	if(textname.value==""){
		alert("登录失败");
		return false;
	}
}
window.onload=function(){
  var aInput = document.getElementsByTagName('input');
  var oName = aInput[0];
  var pwd = aInput[1];
  var pwd2 = aInput[2];
  var aP = document.getElementsByTagName('p');
  var name_msg = aP[0];
  var pwd_msg = aP[1];
  var pwd2_msg = aP[2];
  var name_length = 0;
  var submit=document.getElementById('submit');
  var text=document.getElementById('text');
  document.getElementsByTagName('input')[3].onclick = function () {
  var pList = document.getElementsByTagName('p');
  for (var i = 0; i < pList.length; i++) {		
	if (pList[i].style.color !='lightgreen') {
		alert('输入有误');
		return;
		}
	}
	alert('注册成功');
	}

//名字
  oName.onfocus = function(){
    name_msg.style.display = "inline";
    name_msg.innerHTML = "必填，长度为4-16个字符";
  }
  oName.onblur = function(){
               
    var reg = /[^\w\u4e00-\u9fa5]/g;
    name_length = getLength(this.value);
    //有非法字符 
    if(reg.test(this.value)){
      name_msg.innerHTML = '含有非法字符！';
      name_msg.style.color="red";
      text.style.border="1px solid red";
    }
    //不能为空
    else if (this.value==""){
      name_msg.innerHTML = "不能为空！";
      name_msg.style.color="red";
      text.style.border="1px solid red";
    }
    //长度超过16个字符
    else if (name_length > 16){
      name_msg.innerHTML = "长度超过16个字符！";
      name_msg.style.color="red";
      text.style.border="1px solid red";
    }
    //长度少于4个字符
    else if (name_length < 4){
      name_msg.innerHTML = "长度少于4个字符！";
      name_msg.style.color="red";
      text.style.border="1px solid red";
    }
    //正确
    else {
      name_msg.innerHTML = "正确！";
      name_msg.style.color="lightgreen";
      text.style.border="1px solid lightgreen";
    }
  }

 //密码
 pwd.onfocus=function(){
 	pwd_msg.style.display="inline";
 	pwd_msg.innerHTML="字符数为4-16位，必须为大小写字母";
}
pwd.onblur=function(){
	var re=/[^a-zA-Z]/g;
	//不能为空
	if(this.value==""){
		pwd_msg.innerHTML="不能为空！";
		pwd_msg.style.color="red";
		password.style.border="1px solid red";
	}
	//长度为4-16个字符
	else if(this.value.length<4||this.value.length>16){
		pwd_msg.innerHTML="字符长度不符合";
		pwd_msg.style.color="red";
		password.style.border="1px solid red";
	}
	//必须为字母
	else if(re.test(this.value)){
		pwd_msg.innerHTML="必须为字母！";
		pwd_msg.style.color="red";
		password.style.border="1px solid red";
	}
	//正确
	else{
		pwd_msg.innerHTML="正确！";
		pwd_msg.style.color="lightgreen";
		password.style.border="1px solid lightgreen";
	}
  }
  //确认密码
  pwd2.onfocus=function(){
  	pwd2_msg.style.display="inline";
  	pwd2_msg.innerHTML="请再输入一次";
  }
  pwd2.onblur=function(){
  	if(this.value!=pwd.value){
  		pwd2_msg.innerHTML="两次密码不一致！";
  		pwd2_msg.style.color="red";
  		again.style.border="1px solid red";
  	}
  	else {
  		pwd2_msg.innerHTML="正确！";
  		pwd2_msg.style.color="lightgreen";
  		again.style.border="1px solid lightgreen";
  	}
  }
}