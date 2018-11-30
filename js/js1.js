var i=0;
var stop;
/*	每隔2秒运行一次轮播*/
stop=setInterval(function(){
	i++;
	if(i>4){
		i=0;
	}
	xiaoguo2(i);
	xiaoguo(i);
},4000)
/*	动作函数*/
function xiaoguo2(n){
/*		块一*/
	$('.fugai1')
	.css({"background-images":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
	.animate({"backgroundPosition-x":-1000+'px'},3000)
	.css({'display':'none'})
	//块二
	$('.fugai2')
	.css({"background-images":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":-200+'px'})
	.animate({"backgroundPosition-x":-1000*2+'px'},3000)
	.animate({'display':'none'})
	//块三
	$('.fugai3')
	.css({"background-images":"url(images/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
	.animate({"backgroundPosition-x":-1000*3+'px'},3000)
	.animate({'display':'none'})
/*		$('.fugai')
	.css({"background-image":"url(image/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
	.deplay(3000).animate({"backgroundPosition-x":-730*3+'px'},3000)
	.animate({'display':'none'},10)		*/
}
$('.list-lix>li').eq(0).css({'background-color':'#9D58FA'})
function xiaoguo(n){
	var b=n-1;	
	$('.list-lix>li').css({'background-color':'#FCC'})	
	$('.list-lix>li').eq(b).css({'background-color':'#9D58FA'})
	$('.dian').animate({'width':1000+'px'},2000)
	$('.dian').animate({'width':0+'px'},100)
	$('.boxx').animate({'margin-left':-n*1000+'px'},2000,function(){
		if(n==6){
			$('.boxx').css({'margin-left':0+'px'})
		}
	})
}
/*	左右按钮*/
function huan(n){
	var j=i;
	i=i+n;
	
	if(i>4){
		i=1;
	}
	if(i<0){
		i=3;
	}
	xiaoguo(i);
}
//左箭头
$('.btnx-l').click(function(){
clearInterval(stop);
	stop=null;			
		huan(-1);	
		if(i==0){
			$('.btnx-con-l').html('<img src="images/lunbo'+parseInt(6)+'.jpg">')
		}else{
			$('.btnx-con-l').html('<img src="images/lunbo'+parseInt(i)+'.jpg">')
		}
		$('.boxx').stop(true,true);
		$('.dian').stop(true,true);
		
});
//右箭头
$('.btnx-r').click(function(){
	clearInterval(stop);
	stop=null;
		huan(1);			
		if(i==5){
			$('.btnx-con-r').html('<img src="images/lunbo'+parseInt(1)+'.jpg">')
		}else if (i==6) {
			$('.btnx-con-r').html('<img src="images/lunbo'+parseInt(2)+'.jpg">')
		}else{
			$('.btnx-con-r').html('<img src="images/lunbo'+parseInt(i+2)+'.jpg">')
		}
		$('.boxx').stop(true,true);
		$('.dian').stop(true,true);
});
//$('.btn-l').click(function(){huan(-1);});
//$('.btn-r').click(function(){huan(1);});


/*	鼠标放上大块*/
$('.lunbo').onmouseover(function(){
	
	clearInterval(stop);
	stop=null;
	$('.btnx').show();

})
container.onmouseover=stop;
container.onmouseout=play;
/*	鼠标离开大块*/
$('.lunbo').onmouseout(function(){
	if(stop==null){
		stop=setInterval(function(){
			i++;
			if(i>4){
				i=1;
			}
			xiaoguo(i);
			xiaoguo2(i);
		},4000)			
	}
	$('.btnx').hide();
	$('.btnx-con-l').text('');
	$('.btnx-con-r').text('');
})
/*按钮小标题*/
$('.list-lix>li').mouseover(function(){		
	clearInterval(stop);
	stop=null;
	i= Number($(this).text());
	xiaoguo($(this).text())
	$('.boxx').stop(true,true);
	$('.dian').stop(true,true);
})

