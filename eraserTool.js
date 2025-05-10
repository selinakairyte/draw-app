function eraserTool() {
	this.icon = "assets/eraser.jpg";
	this.name = "Eraser Tool";

	// base eraser size (slider overrides this)
	this.eraserSize = 20;

	// stores previous mouse position for continuous erasing
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function() {
		if (mouseIsPressed) {
			stroke(255); // white stroke for erasing effect
			strokeWeight(freehandSlider.value() * 20); // slider controls eraser size

			if (previousMouseX == -1) {
				// first press: record current position
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			} else {
				// draw line between previous and current positions
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		} else {
			// reset when mouse is released
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	this.unselectTool = function() {
		noStroke(); // clear stroke when switching tools
	};
}
