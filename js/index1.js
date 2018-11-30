// JavaScript Document
function $ (id){
	return document.getElementById(id);
}
var scorll_img=new Array();
scorll_img[0]="images/dd_scroll_1.jpg";
scorll_img[1]="images/dd_scroll_2.jpg";
scorll_img[2]="images/dd_scroll_3.jpg";
scorll_img[3]="images/dd_scroll_4.jpg";
scorll_img[4]="images/dd_scroll_5.jpg";
scorll_img[5]="images/dd_scroll_6.jpg";
var nowFrame=1;
var maxFrame=6;
var maxTimer;
function showImg(d1){
	if(Number(d1)){
		nowFrame=d1;
		}
	var objs=document.getElementsByName("scroll_number_li");
	for(var i=1;i<(maxFrame+1);i++){
		if(i==nowFrame){
		$("dd_scroll").src=scorll_img[i-1];
		objs[i-1].className="scroll_number_over";
		}else{
			objs[i-1].className="scroll_number_out";
			}
	}
	if(nowFrame==maxFrame){
		nowFrame=1;
      }else{
		  nowFrame++;
		  }
}
function overLoopShow(){
	window.clearTimeout(theTimer);
	showImg(this.innerHTML);
}

function outLoopShow(){
	showImg();
	theTimer=window.setTimeout(outLoopShow,1000);
}
window.onload=init;

function init(){
		var objLi=document.getElementsByName("scroll_number_li");
	for(var i=0;i<objLi.length;i++){
		objLi[i].onmouseover=overLoopShow;
		objLi[i].onmouseout=outLoopShow;
		}
		outLoopShow();
}