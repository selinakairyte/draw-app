function CalligraphyPenTool(){
	this.icon = "assets/calligraphy.png";  
	this.name = "calligraphy pen";

	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		if(mouseIsPressed){
			// calculate speed because as speed increased the line gets thinner to simulate a calligraphy pen
			let speed = dist(mouseX, mouseY, previousMouseX, previousMouseY);
			let weight = map(speed, 0, 30, freehandSlider.value(), 1);
			weight = constrain(weight, 1, 10);

			stroke(colourP.selectedColour);
			strokeWeight(weight);
			strokeCap(ROUND); 

			if (previousMouseX == -1){
				// first press → set initial position
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			else{
				// creating a smoother stroke to simulate a calligraphy pen
				let steps = floor(dist(mouseX, mouseY, previousMouseX, previousMouseY));
				for (let i = 0; i < steps; i++){
					let interX = lerp(previousMouseX, mouseX, i / steps);
					let interY = lerp(previousMouseY, mouseY, i / steps);
					point(interX, interY);
				}
				// update previous position
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
