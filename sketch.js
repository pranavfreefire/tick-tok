

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  translate(200,200);
  rotate(-90);
  
  hr =hour();
  mn = minute();
  sc  = second();

  scAngle =map(sc,0,60,0,360);
  mnAngle =map(mn,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);
  push();
  rotate(scAngle);
  strock (255,0,0);
  strockWeight (7);
  line (0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  strock(0,255,0);
  strockWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  strock(0,0,255);
  strockWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeweight(10)
  nofill();
  stroke(255,0,0)
  are(0,0,300,300,0,scangle);
  strock(0,255,0);

  are(0,0,200,200,0,mnAngle);
 strock(0,0,255);

  are(0,0,260,260,0,hrAngle); 
  
  drawSprites();
}