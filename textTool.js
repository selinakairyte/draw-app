// defines the TextTool object with icon and name setup
function TextTool(){
	this.icon = "assets/text.png"; 
	this.name = "text tool";

	// creates an HTML input box for the user to type the text they want to draw
	let textInput = createInput('Hello!');

	// places the input box inside the HTML element with id 'textToolContainer'
	textInput.parent('textToolContainer');

	// adds margin around the input box for spacing
	textInput.style('margin', '5px');

	// defines what happens when this tool is actively drawing on the canvas
	this.draw = function(){
        stroke(colourP.selectedColour); // sets the stroke color for the tool
        strokeWeight(freehandSlider.value()); // sets the stroke weight using the slider value
		if(mouseIsPressed){
			fill(colourP.selectedColour); // fills the text with the selected color
			noStroke(); // removes the outline stroke from the text
			textSize(freehandSlider.value()); // sets the text size based on the slider value
			text(textInput.value(), mouseX, mouseY); // draws the text from the input box at the mouse position
		}
	};

	// hides the input box when the tool is unselected
	this.unselectTool = function(){
		textInput.hide();
	};

	// shows the input box and resets the slider when the tool is selected
	this.populateOptions = function(){
        freehandSlider.value(10); // resets slider to default size for text
		textInput.show();
	};
}
