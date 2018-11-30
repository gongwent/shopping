// JavaScript Document

window.onload=init;
function init(){
	var obj=document.getElementsByName("p");
	
	for(var i=1;i<obj.length;i++)
	{
		obj[i].onmouseover=change1;
		obj[i].onmouseout=change2;
		obj[i].num=i;
	}
	var obj=document.getElementsByTagName("h5");
	
	
}
function change1(){
	var obj=document.getElementsByName("p");
	this.style.cursor="pointer";
	this.style.border="1px solid #f00";
	obj[0].src="images/show"+this.num+"_middle.jpg";
}
function change2(){
	this.style.border="none";
	this.style.cursor="pointer";
}



