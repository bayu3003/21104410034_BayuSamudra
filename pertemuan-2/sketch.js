function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(225, 248, 220);
  stroke("#ff0000");
  
  for(let i=0; i<= height; i+=25)
    {
      strokeWeight(1);
      line(0, i, width, i);
      strokeWeight(5);
      point(i, i);
    }
  {
    for(let i=0; i<= width; i+=25)
      {
        strokeWeight(1);
        line(i, 0, i, height);
      }
  }
}