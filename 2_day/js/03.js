var num1 = prompt("请输入第一个数字：");
var num2 = prompt("请输入第二个数字：");
var num3 = prompt("请输入第三个数字：");
var max;
if(score >100 || score <0 || isNaN(score) || score == ""){
		alert("无效！");
		}else{
	if(num1 > num2){
		max = num1;
	}else if(num2 > num3){
		max = num2;
	}else{
		max = num3;
	}
	alert("最大的数是："+max);
	}