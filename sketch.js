let angle=0
let font; 
let points = [];  
function preload(){  
    font = loadFont("f/Danfo-Regular.ttf") 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font)
  textSize(100)
  textAlign(CENTER,CENTER)
  points = font.textToPoints("413730739", 250,450, 200, {
    sampleFactor:2
  }); 
     for (let u=0;u<points.length; u++) { 
       text(str(u),points[u].x,points[u].y)
       noStroke()
       ellipse(points[u].x,points[u].y,8)
       fill("#3c096c")
    }
  angleMode(DEGREES)
}
function draw() {
  background("#caf0f8");
  noFill()
  stroke("#0077b6")
  strokeWeight(2);
 var rect_width=75
  var c_w=25
  var c1_w=40
  var t_w=25
  let circleSize = map(mouseY, 0, height, 1, 50); 
  let rectSize = map(mouseX, width, height, 1, 100)
  for(let y=0;y<windowHeight;y=y+1){
   for(let i=0;i<windowWidth;i=i+1){
    stroke("#BE77FF")
    rect(rect_width*i,0+75*y, rectSize*2)
    stroke("#f15bb5")
    ellipse((c_w+25)*i,50+50*y,c_w,circleSize)
    stroke("#fee440")
    triangle(25+(t_w+25)*i, 0+50*y, 0+(t_w+25)*i, 50+50*y, 50+(t_w+25)*i,50+50*y) 
 }
 }
  push()
  translate(width/2,height/2)
  scale(1,cos(angle))
 let  points = font.textToPoints("413730739", -500,75, 200, {
   sampleFactor:2//數字越小 產生點數越少
 }); 
 scale(1, cos(angle * 200));
 for (let u=0; u<points.length; u++) { 
    noStroke()
    ellipse(points[u].x,points[u].y,8)
    fill("#3c096c")
}
 pop()
 angle=(angle+5)%180
}
