function StarBrushTool(){
	// sets the icon image and name for the star brush tool
	this.icon = "assets/starbrush.jpg"; 
	this.name = "star brush";

	// defines what happens when the user draws with this tool
	this.draw = function(){
		// checks if the mouse is currently pressed down
		if(mouseIsPressed){
			// sets the fill color using the currently selected color
			fill(colourP.selectedColour);

			// disables any shape outlines
			noStroke();

			// draws 5 stars around the mouse with random offsets
			for (let i = 0; i < 5; i++){ 
				// random horizontal offset, scaled by slider value
				let offsetX = random(freehandSlider.value() * -20, 20);

				// random offset
				let offsetY = random(-20, 20);

				// calls the helper function to draw a star at the mouse position
				this.drawStar(mouseX + offsetX, mouseY + offsetY, 5, 10, 5);
			}
		}
	};

	// helper function to draw a star shape at a given position
	this.drawStar = function(x, y, radius1, radius2, npoints){
		// calculates the angle between star points
		let angle = TWO_PI / npoints;

		// calculates the half-angle used for the inner points
		let halfAngle = angle / 2.0;

		// starts defining the star shape
		beginShape();

		// loops over each point in the star
		for (let a = 0; a < TWO_PI; a += angle) {
			// calculates outer coordinates
			let sx = x + cos(a) * radius2;
			let sy = y + sin(a) * radius2;
			vertex(sx, sy);

			// calculates inner coordinates
			sx = x + cos(a + halfAngle) * radius1;
			sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
		}

		// closes the shape
		endShape(CLOSE);
	};
}
