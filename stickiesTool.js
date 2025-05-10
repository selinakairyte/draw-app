this.draw = function(){
	// checks if the mouse is pressed and the stamp hasn’t been placed yet
	if(mouseIsPressed && !this.stamped){

		// resets the blend mode to normal to avoid carryover effects from other tools
		blendMode(BLEND);

		// ensures no erasing mode is active
		noErase();

		// sets stroke weight for the rectangle outline
		strokeWeight(1);

		// sets stroke color to solid black with full opacity
		stroke(0, 0, 0, 255);

		// sets fill color for the main note body (light yellow)
		fill(255, 255, 202, 255);

		// calculates rectangle width and height based on the slider value
		let width = freehandSlider.value() * 20;
		let height = freehandSlider.value() * 20;

		// draws the main note rectangle centered on the mouse position
		rect(mouseX - width/2, mouseY - height/2, width, height);

		// sets fill color for the small top tab (light orange)
		fill(255, 220, 145, 255);

		// draws the top tab rectangle on top of the main note
		rect(mouseX - width/2, mouseY - height/2, width, 12);

		// sets fill color for the text (black)
		fill(0, 0, 0, 255);

		// disables stroke around the text
		noStroke();

		// aligns text to top-left for positioning
		textAlign(LEFT, TOP);

		// sets the text size for the label
		textSize(10);

		// draws the word “note” inside the note rectangle, slightly offset from the top
		text("note", mouseX - width/2 + 4, mouseY - height/2 + 16);

		// marks the stamp as placed so it doesn’t draw again until the next click
		this.stamped = true;
	}

	// resets the stamped flag when the mouse is released
	if(!mouseIsPressed){
		this.stamped = false;
	}
};
