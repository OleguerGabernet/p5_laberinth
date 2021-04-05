
var div = 20;
var strk = 15;
var dim = 0;
var a = 20;
var fr;
var r = 0;

var color1;
var color2;
var color3;


function setup() {
  createCanvas(1080, 1080);
  fr = createP(' ');
  dim = width/div;
  
  color1 = color('#411E22');
  color2 = color("#58A6A6");
  color3 = color("#EFA355");
  background(color1);
}

function draw() {
  stroke(50);
  strokeWeight(strk);
  strokeCap(PROJECT)
  for (var i=0; i < div; i++){
    for (var j=0; j < div; j++){
      
      r = int(random(2));

      if ( r == 1){
        stroke(color2);
      }
      else{
        stroke(color3);
      }
      
      line((i+r)*dim, (j)*dim, (i+1-r)*dim, (j+1)*dim);
      fr.html(i);
    }
  }
  // r = int(random(2));

  // line((0+r)*width, 0, (1-r)*width, height);
 
  // a = int(random(2));
  //fr.html(color1);
  
  //saveCanvas('laberinthJPG_canvas', 'JPG');
  
  noLoop();
}
