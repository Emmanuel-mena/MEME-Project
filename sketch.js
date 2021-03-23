let img; 

function setup() {
  createCanvas(580, 310);
  img = loadImage('onejob.jpeg');
  
}

function draw() {
  background(220);
  
  image(img, 0 ,0 );
  
  push();
  translate(mouseX-350, mouseY-250); 
  
  fill(247,223,0)
   textSize(35);
   text("YOU HAD ONE JOB",100,220,370,150);
  pop();
}
