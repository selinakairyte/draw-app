function NoteStampTool(){
	// sets the icon and name for the tool
	this.icon = "assets/stickies.jpg";  
	this.name = "note stamp";

	this.draw = function(){
		// only stamp once per mouse press
		if(mouseIsPressed && !this.stamped){
			let width = freehandSlider.value() * 20;
			let height = freehandSlider.value() * 20;

			// draw the light yellow note body
			fill(255, 255, 202); 
			stroke(0);
			rect(mouseX - width / 2, mouseY - height / 2, width, height);

			// draw the orange top tab
			fill(255, 220, 145);  
			rect(mouseX - width / 2, mouseY - height / 2, width, 12);

			// draw the "note" label
			fill(0);
			noStroke();
			textAlign(LEFT, TOP);
			textSize(10);
			text("note", mouseX - width / 2 + 4, mouseY - height / 2 + 16);

			this.stamped = true;
		}

		// reset stamped flag when mouse is released
		if(!mouseIsPressed){
			this.stamped = false;
		}
	};
}
