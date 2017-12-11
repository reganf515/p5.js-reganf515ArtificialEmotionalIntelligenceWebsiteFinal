var button;
var myDiv;
var myDiv2;
var img;
var myRec;


function setup() {
  createCanvas(900, 900);
  background(69,0,143);
  blanket();
  image(img, 800, 200, 200, 300);


  //background(0);
  // button = createButton('AEI Explorable Page');
  // button.position(19, 19);
  // button.mousePressed(writeText);
  // button.style("background-color", color(13,255,159));
  // button.size (80,80);
  // s = "The quick brown fox jumped over the lazy dog.";
  // fill(200);
  // text(s, 125, 288, 170, 45); // Text wraps within text box

  button = createButton('Artificial Emotional Intelligence Introduction');
 button.position(40, 100);
 button.mousePressed(writeText);

 button2 = createButton('AEI Interaction');
button2.position(300, 100);
//button2.mousePressed(writeText);
button2.mousePressed(showResult);


button3 = createButton('The Future of AEI');
button3.position(410, 100);
button3.mousePressed(writeTextFuture);


myDiv = createDiv("What is artificial emotional intelligence? Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior.")
myDiv.style("position", 0, 210,);
myDiv.style("color", "#F8F8FF");
myDiv.style("font-size", "20px");
myDiv.hide();

myDiv2 = createDiv("In the next five years, artificial emotional intelligence is projected to grow into a multibillion-dollar industry, completely transforming industries, market research, innovation, R&D, and just so much more. In a bid to harness the human-like aspect of AI, Amazon, Microsoft, and Google are already in the process of hiring comedians and scriptwriters to build personality into their technologies.The future road map of artificial emotional intelligence will see businesses using emotion analytics to make decisions and include the idea of multimodal emotion recognition and an emotion chip.”")
myDiv2.style("position", 0, 210,);
myDiv2.style("color", "#F8F8FF");
myDiv2.style("font-size", "20px");
myDiv2.hide();

myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

// instructions:
textSize(32);
textAlign(CENTER);
//text("say something", width/2, height/2);

//start recording as soon as you load the page
  myRec.start();
}






// from P5.js library
function preload() {
  img = loadImage("mod.jpg");
}
//
// function changeBG() {
//   var val = random(255);
//   background(val);
// }

function writeText() {
blanket();
  // ellipse(5,10,23,20);
//code from Thomas
// myDiv2.remove();
myDiv.show();
myDiv2.hide();
// myDiv = createDiv("What is artificial emotional intelligence? Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior.")
// myDiv.style("position", 0, 210,);
// myDiv.style("color", "#F8F8FF");
// myDiv.style("font-size", "20px");
//text("say something", width/2, height/2);

}


function writeTextFuture() {
  blanket();
  //ellipse(5,10,23,20);
//code from Thomas
//myDiv.remove();
 myDiv2.show();
 myDiv.hide();
// myDiv2 = createDiv("In the next five years, artificial emotional intelligence is projected to grow into a multibillion-dollar industry, completely transforming industries, market research, innovation, R&D, and just so much more. In a bid to harness the human-like aspect of AI, Amazon, Microsoft, and Google are already in the process of hiring comedians and scriptwriters to build personality into their technologies.The future road map of artificial emotional intelligence will see businesses using emotion analytics to make decisions and include the idea of multimodal emotion recognition and an emotion chip.”")
// myDiv2.style("position", 0, 210,);
// myDiv2.style("color", "#F8F8FF");
// myDiv2.style("font-size", "20px");





}

function draw()
//button.mousePressed(showResult);
{


  // why draw when you can talk?
}

//print the recorded text to the screen
function showResult(){
myDiv2.hide();
myDiv.hide();
  if(myRec.resultValue==true) {
    background(192, 255, 192);
    text(myRec.resultString, random(100,width-100), random(100,height-100));
    console.log(myRec.resultString);

  }
  else{
    background(192, 255, 192);
    text("say something and click the button each time you want to see your text", 505,250);
  }
}





//from Sam Fine
function blanket() {
     createCanvas(windowWidth, windowHeight+200);
     frameRate(15);
     background(255);
     noStroke();

     // This is the gold rectange containing the header and buttons
     fill(10,10,255);
     rect(0,0,windowWidth,175);

     //title
     textSize(50);
     fill(255,255,255);
     text("Intro to Artificial Emotional Intelligence", 10,45);

     //subtitle
     fill(125,255);
     textSize(12);
     text("An Interactive AI", 10,70);

     fill(155,0,255);
     rect(0,200,windowWidth, windowHeight);

     fill(100,50,200);
     rect(windowWidth/3, windowHeight/3, windowWidth/4, windowHeight/4);
     rect(windowWidth/4 + 400, windowHeight/4 + 200, windowWidth/5, windowHeight/5);
     rect(windowWidth/4 - 200, windowHeight/4 + 250, windowWidth/5, windowHeight/5);
     rect(windowWidth/3 + 200, windowHeight/3 + 300, windowWidth/4, windowHeight/4);
     rect(windowWidth/4 + -100, windowHeight/4 + 400, windowWidth/5, windowHeight/5);






     //blue page
    //  fill(255);
    //  triangle(windowWidth, windowHeight/2, windowWidth, windowHeight, windowWidth/7, windowHeight);

    //  textSize(50);
    //  text("Is AEI the Future of Artificial Intelligence", 500,500);

   }


  //  var img;
  //  function preload() {
  //    img = loadImage("mod.jpg");
  //  }
  //  function setup() {
  //    // Top-left corner of the img is at (0, 0)
  //    // Width and height are the img's original width and height
  //    image(img, 0, 0);
  //  }
