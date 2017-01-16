

// alert("我的第一个 JavaScript");
// document.getElementById("demo").innerHTML="修改。";  获取标签ID 替换内容

function myfun(num){
	alert(num);
	document.write(num);
	console.log(num); 
}
function inner(num){  
	document.getElementById("pp").innerHTML = num;
}

function anony(){    //arguments是默认参数指针
	alert(arguments[0]);
}

function factorial(num){    //递归函数 arguments.callee是默认的当前执行函数指针
	if(num <= 1){
		return 5;
	}else{
		return num * arguments.callee(num-1);
	}
}

var person = {
	name:'小明',
	age:'18岁',
	sex:'男',
	hobby:'摇滚乐'
};

var table = ['red','blue','yellow'];
table.push('green');
var item = table.pop();

function callSomeFunction(someFunction,someArgument){
	alert(someFunction(someArgument));
}

function add10(num){
	return num + 10;
}
 // callSomeFunction(add10,10);

function factorial(num){  //简易递归程序  (3+2+1)
	if(num <= 1){ 
		return 1;
	}else{
		return num + arguments.callee(num-1);
	}
}
var test = factorial(3);

// alert(test);
function sumx(num1,num2){
	return num1 + num2;
}
function callSum1(num1,num2){
	return sumx.apply(this,arguments);
}
function callSum2(num1,num2){
	return sumx.apply(this,[num1,num2]);
}
// alert(callSum1(10,10));
// alert(callSum2(10,10));

// window.color = "red";
// var o = {color:"blue"};
// function sayColor(){
// 	alert(this.color);
// }
// sayColor.call(o);


eval("function say(num){ alert(num) }");
// say('fuck world');



var arr = [1,2,3,34,56,566,3,23,45,57];
var arrMax = Math.min.apply(Math,arr);
// alert(arrMax); 

var person = {};
Object.defineProperty(person,"name",{
	writable: false,
	value: "HXB"
});

// alert(person.name);
person.name = "Greg";
// alert(person.name);

function createPerson(name,age,job){   //工厂模式
   var o = new Object();
   o.name = name;
   o.age  = age;
   o.job  = job;
   o.sqyName = function(){
   	 alert(this.name);
   };
   return o;
}
var person1 = createPerson("hook",26,"code");
// alert(person1.name);

function xxx(name,age,job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert(this.name);
	};
}
// var person1 = new xxx("虾米",24,"Software Eng");
// alert(person1.name);

var m = new Map();
m.set("Adam",67);
m.set("Bob",59);
m.set("Greg",90);
for(var x of m){
	// alert(x[0]+ '=' +x[1]);
}



var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#F0F0F0";
ctx.fillRect(0,0,800,300);

ctx.moveTo(0,0);
ctx.lineTo(800,0);

ctx.moveTo(0,50);
ctx.lineTo(800,50);

ctx.moveTo(0,100);
ctx.lineTo(800,100);

ctx.moveTo(0,150);
ctx.lineTo(800,150);

ctx.moveTo(0,200);
ctx.lineTo(800,200);

ctx.moveTo(0,250);
ctx.lineTo(800,250);

ctx.moveTo(100,0);
ctx.lineTo(100,250);

ctx.moveTo(200,0);
ctx.lineTo(200,250);

ctx.moveTo(300,0);
ctx.lineTo(300,250);

ctx.moveTo(400,0);
ctx.lineTo(400,250);

ctx.arc(50,50,20,2,2*Math.PI*2);


ctx.stroke();
