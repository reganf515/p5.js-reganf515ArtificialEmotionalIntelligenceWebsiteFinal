var button;

function setup() {
  createCanvas(100, 100);
  background(0);
  button = createImg('mod.jpg');
  button.position(19, 19);
  button.mousePressed(changeBG);
  button.size(100,100);
}

function changeBG() {
  var val = random(255);
  background(val);
}
