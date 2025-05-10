function ShapeTool() {
	// sets the tool’s icon and display name
	this.icon = "assets/rectangle.png";
	this.name = "Shape Tool";

	// stores the starting mouse position when drawing begins
	var startMouseX = -1;
	var startMouseY = -1;

	// flag to track if a shape is currently being drawn
	var drawing = false;

	// main draw function called when the tool is active
	this.draw = function() {
		// checks if the mouse is pressed
		if (mouseIsPressed) {
			// on first press, record starting coordinates and mark as drawing
			if (startMouseX == -1) {
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
			}
			// while dragging, update the display to show the outline
			else {
				updatePixels(); // refresh the canvas
				stroke(0, 0, 250, 255); // blue outline
				fill(255, 255, 255, 0); // transparent fill
				rectMode(CORNERS); // draws from corner to corner
				rect(startMouseX, startMouseY, mouseX, mouseY);
			}
		}
		// when mouse is released, finalise the shape
		else if (drawing) {
			stroke(0, 0, 0, 255); // black outline
			fill(255, 255, 255, 0); // transparent fill
			rectMode(CORNERS);
			rect(startMouseX, startMouseY, mouseX, mouseY);

			// reset starting coordinates and drawing flag
			startMouseX = -1;
			startMouseY = -1;
			drawing = false;

			// saves the current canvas state
			loadPixels();
		}
	};
}
