// JavaScript Document
function btn_over(){
	document.getElementById("registerBtn").src="images/register_btn_over.gif";
}
function btn_out(){
	document.getElementById("registerBtn").src="images/register_btn_out.gif";
}
window.onload=init;
function init(){
	var registerBtn1=document.getElementById("registerBtn");
	registerBtn1.onmouseover=btn_over;
	registerBtn1.onmouseout=btn_out;
}
 