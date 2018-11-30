// JavaScript Document
window.onload = init;
function init() {
	var allCheckBoxObj=document.getElementById("allCheckBox");      //①
	allCheckBoxObj.onclick=selectAll;
	var cartCheckBoxObjs=document.getElementsByName("cartCheckBox");
	for(var i=0;i<cartCheckBoxObjs.length;i++){
		cartCheckBoxObjs[i].onclick=selectSingle;
	}
	var minusObjs=document.getElementsByName("minus");      //② 
	for(var i=0;i<minusObjs.length;i++){
		minusObjs[i].onclick=changeNum;
		minusObjs[i].op="minus";
		minusObjs[i].numId="num_"+(i+1);
	}
	var addObjs=document.getElementsByName("add"); 
	for(var i=0;i<addObjs.length;i++){
		addObjs[i].onclick=changeNum;
		addObjs[i].op="add";
		addObjs[i].numId="num_"+(i+1);
	}
	var deleteRowObjs=document.getElementsByName("deleteRow");      //③
	for(var i=0;i<deleteRowObjs.length;i++){
		deleteRowObjs[i].onclick=deleteRow;
		deleteRowObjs[i].trId="product"+(i+1);
	}
	var deleteSelectRowObj=document.getElementById("deleteSelectRow");      //④
	deleteSelectRowObj.onclick=deleteSelectRow;
	productCount();
}
function productCount() {
	var total=0;      //商品金额总计
	var integral=0;   //可获商品积分
	var point;      //每一行商品的单品积分
	var price;     //每一行商品的单价
	var number;    //每一行商品的数量
	var subtotal;  //每一行商品的小计
     /*访问ID为shopping表格中所有的行数*/
	var trObjs=document.getElementById("shopping").getElementsByTagName("tr");      //⑤
	if(trObjs.length>0){
		for(var i=1;i<trObjs.length;i++){/*从1开始，第一行的标题不计算*/      //⑥
			if(trObjs[i].cells.length>2){ //是商品信息行
				point=trObjs[i].cells[3].innerHTML; 
				price=trObjs[i].cells[4].innerHTML;
				number=trObjs[i].cells[5].getElementsByTagName("input")[0].value;
				trObjs[i].cells[6].innerHTML=price*number;
				if(trObjs[i].cells[0].firstChild.checked==true){
					integral+=point*number;
					total+=price*number;
				}
			}
		}
		integral=parseFloat(integral)*100;      //⑦
		integral=Math.round(integral)/100;
		total=parseFloat(total)*100;
		total=Math.round(total)/100;
		document.getElementById("total").innerHTML=total;
		document.getElementById("integral").innerHTML=integral;
	}
	
}
function changeNum() {
	var numObj=document.getElementById(this.numId);      //⑧
	if(this.op=="minus"){
		if(numObj.value<=1){
			alert("宝贝数量必须是大于0");
			return false;
		}else{
			numObj.value=parseInt(numObj.value)-1;
			productCount();
		}		
	}else{
		numObj.value=parseInt(numObj.value)+1;
		productCount();
	}
}
function deleteRow() {
	var rowObj=document.getElementById(this.trId);
	var rowIdx=rowObj.rowIndex; 
	var flag=window.confirm("确定要删除该商品?");
	if(flag==true){
		var tabObj=document.getElementById("shopping");
		tabObj.deleteRow(rowIdx); 
		tabObj.deleteRow(rowIdx-1);
	}
	productCount();
}
function deleteSelectRow() {
	var flag=window.confirm("确定要删除所选择的商品?");
	if(flag==true){
		var tabObj=document.getElementById("shopping");
		var cartCheckBoxObjs=document.getElementsByName("cartCheckBox");
		for(var i=cartCheckBoxObjs.length-1;i>=0;i--){
			if(cartCheckBoxObjs[i].checked==true){
				var trObj=document.getElementById(cartCheckBoxObjs[i].value);
				var rowIdx=trObj.rowIndex;
				tabObj.deleteRow(rowIdx); 
				tabObj.deleteRow(rowIdx-1); 
			}
		}
		productCount();
	}
}
function selectAll() {
	var allCheckBoxObj=document.getElementById("allCheckBox");
	var cartCheckBoxObjs=document.getElementsByName("cartCheckBox");
	for(var i=0;i<cartCheckBoxObjs.length;i++){
		cartCheckBoxObjs[i].checked=allCheckBoxObj.checked;
	}
	productCount();
}
function selectSingle() {
	var flag=true;
	var cartCheckBoxObjs=document.getElementsByName("cartCheckBox");
	for(var i=0;i<cartCheckBoxObjs.length;i++){
		if(cartCheckBoxObjs[i].checked==false){
			flag=false;
			break;	
		}
	}
	var allCheckBoxObj=document.getElementById("allCheckBox");
	if(flag){
		allCheckBoxObj.checked=true;
	}else{
		allCheckBoxObj.checked=false;
	}
	productCount();
}
