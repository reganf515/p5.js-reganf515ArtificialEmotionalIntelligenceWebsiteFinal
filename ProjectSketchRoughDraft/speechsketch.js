let myRec;


function setup(){

    myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    myRec.continuous = true; // do continuous recognition
    myRec.interimResults = true; // allow partial recognition (faster, less accurate)

		// graphics stuff:
		createCanvas(800, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);

    // instructions:
		textSize(32);
		textAlign(CENTER);
		text("say something", width/2, height/2);


//click a button to print the most recent recording
      button = createImg('mod.png');
      button.position(219, 219);
      button.size(40,40);
      button.mousePressed(showResult);

//start recording as soon as you load the page
  myRec.start();
}


	function draw()
	{
		// why draw when you can talk?
	}

//print the recorded text to the screen
	function showResult(){

		if(myRec.resultValue==true) {
			background(192, 255, 192);
			text(myRec.resultString, random(100,width-100), random(100,height-100));
			console.log(myRec.resultString);

		}
	}
