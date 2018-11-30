/*悬浮窗口*/

var moveX = 30;
var moveY = 60;
var step = 1;
var directionY = "down";
var directionX = "right";
window.onload = init;

function init() {
	setInterval("changePos()", 50);
	var closeObj = document.getElementById("close");
	closeObj.onclick = function() {
		document.getElementById("float").style.display = "none";
	}
}

function changePos() {
	var float1 = document.getElementById("float");
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var floatHeight = document.getElementById("floatImg").height;
	var floatWidth = document.getElementById("floatImg").width;
	float1.style.left = parseInt(moveX + document.documentElement.scrollLeft) + "px";
	float1.style.top = parseInt(moveY + document.documentElement.scrollTop) + "px";
	if(directionY == "down") {
		moveY = moveY + step;
	} else {
		moveY = moveY - step;
	}
	if(moveY < 0) {
		directionY = "down";
		moveY = 0;
	}
	if(moveY >= (height - floatHeight)) {
		directionY = "up";
		moveY = (height - floatHeight);
	}
	if(directionX == "right") {
		moveX = moveX + step;
	} else {
		moveX = moveX - step;
	}
	if(moveX < 0) {
		directionX = "right";
		moveX = 0;
	}
	if(moveX >= (width - floatWidth)) {
		directionX = "left";
		moveX = (width - floatWidth);

	}
}