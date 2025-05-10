function HighlighterTool(){
	this.icon = "assets/highlighter.png";
	this.name = "highlighter";

	// stores previous mouse position for continuous lines
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		if(mouseIsPressed){
			// yellow stroke with transparency for a highlighter effect
			stroke(255, 255, 0, 20);
			strokeWeight(freehandSlider.value() * 10);

			if (previousMouseX == -1){
				// first press: store starting position
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			else{
				// draw a line from previous to current position
				line(previousMouseX, previousMouseY, mouseX, mouseY);

				// update previous position
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		else{
			// reset positions when mouse is released
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}
