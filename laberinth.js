
var div = 25;
var dim = 0;
var a = 20;
var fr;
var r = 0;

function setup() {
  createCanvas(1080, 1080);
  fr = createP(' ');
  background(200);
  dim = width/div;
}

function draw() {
  stroke(50);
  strokeWeight(1);
  for (var i=0; i < div; i++){
    for (var j=0; j < div; j++){
      
      r = int(random(2));

      line((i+r)*dim, (j)*dim, (i+1-r)*dim, (j+1)*dim);
      fr.html(i);
    }
  }
  // r = int(random(2));

  // line((0+r)*width, 0, (1-r)*width, height);
 
  // a = int(random(2));
  fr.html(r);
  noLoop();
}
