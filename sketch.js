var mic;

function setup() {
createCanvas(800,600)
 mic = new p5.AudioIn();
 mic.start();


}
function draw() {
background('#5c62b6');

var vol = mic.getLevel();
var h = map(vol, 0, 1, 0, height);
 
fill('#ff8d70');
stroke('#ff8d70'); 
for(var x=0;x<width;x+=15){
rect(x,height/2-h*random(5),15,(h*random(5)))}
 

}