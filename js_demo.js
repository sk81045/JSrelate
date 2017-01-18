

var canvas = document.getElementById('myCanvas');
var cxt = canvas.getContext("2d");

cxt.fillStyle="#F0F0F0";
cxt.fillRect(0,0,800,300);


 //弦
 for(var i=0;i<6;i++){
   cxt.moveTo(0,i*30+20);
   cxt.lineTo(800,i*30+20);
 }
//品
 for(var i=0;i<4;i++){
  cxt.moveTo(i*100+100,0);
  cxt.lineTo(i*100+100,250);	
 }
  

cxt.stroke();




function makeArc(x,y,r,d){
cxt.fillStyle = "#ff0000";
cxt.beginPath();
cxt.arc(x,y,r,d,Math.PI*2,true);    
cxt.closePath();
cxt.fill();
}

function makefont(notes,y,r){
cxt.fillStyle = "green";
cxt.font="10px console";
cxt.strokeText(notes,y,r);
// cxt.fill();
}

function notes(arcAxis,strAxis){
makeArc(arcAxis.x,arcAxis.y,arcAxis.r,arcAxis.d);
makefont(strAxis.str,strAxis.x,strAxis.y);
}

var GarcAxis =  {
    x: 50,
    y: 18,
    r: 10,
    d: 0
}
var GstrAxis = {
	str:"G",
	x:47,
	y:25
}

var AarcAxis =  {
    x: 250,
    y: 18,
    r: 10,
    d: 0
}

var AstrAxis = {
	str:"A",
	x:247,
	y:25
}

var BarcAxis =  {
    x: 150,
    y: 48,
    r: 10,
    d: 0
}
var BstrAxis = {
	str:"B",
	x:147,
	y:55
}

notes(GarcAxis,GstrAxis);
notes(AarcAxis,AstrAxis);
notes(BarcAxis,BstrAxis);

