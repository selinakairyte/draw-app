function LineToTool(){
	//sets the icon photo as an image from the asset folder
	this.icon = "assets/lineTo.jpg";
	//names the object as LineTo
	this.name = "LineTo";

	//sets variables to -1 to say the mouse has not have been pressed first time
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false; //sets drawing as initially false which is updated later once mouse is pressed

	//creates a function to actually draw the line
	this.draw = function(){

		//if mouse gets pressed at mousex or y location, stores the starting position in the startmousex/y variables and draws the line as the mouse is moving...
		if(mouseIsPressed){
			stroke(colourP.selectedColour);
			strokeWeight(freehandSlider.value()); // changes size
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels(); // saves current pixel state before starting the drawing
			}
			//once mouse is moved it creates a line using the new mouse position from the start position
			else{
				updatePixels(); //restores previous state of the line before drawing the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
		// else if mouse is released, not drawing, resets drawing to false and it resets mouse start positions
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
