function RainbowBrushTool(){
	// sets the tool icon and name
	this.icon = "assets/rainbow.png";
	this.name = "rainbow brush";

	// tracks previous mouse position for smooth lines
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		if(mouseIsPressed){
			// generate a random pinkish yellow colour
			let randomColor = color(random(240, 255), random(180, 255), random(150, 255));
			stroke(randomColor);
			strokeWeight(freehandSlider.value());

			// if first press, just store position
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			else{
				// draw line from previous to current mouse position
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		else{
			// reset when mouse is released
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}
