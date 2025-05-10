function sprayCanTool() {
	// sets the name and icon for the spray can tool
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	// sets how many points (dots) are sprayed per draw call
	this.points = 13;

	// defines how far the spray spreads around the mouse
	this.spread = 10;


	this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
		// sets the stroke color to the selected palette color
		stroke(colourP.selectedColour);

		// sets stroke weight using the slider value (controls dot size)
		strokeWeight(freehandSlider.value());

		// runs only when the mouse is pressed
		if(mouseIsPressed){
			// loops to place multiple random dots within the spread area
			for(var i = 0; i < this.points; i++){
				point(
					random(mouseX - this.spread, mouseX + this.spread), 
					random(mouseY - this.spread, mouseY + this.spread)
				);
			}
		}
	}
}
