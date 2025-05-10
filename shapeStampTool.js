function ShapeStampTool(){
	this.icon = "assets/stamp.png";  
	this.name = "shape stamp";
	// a function to draw 3 random shapes onto the canvas - star,triangle,circle and at random sizes
	this.draw = function(){
		if(mouseIsPressed && !this.stamped){
			fill(colourP.selectedColour);
			noStroke();
			let shapeType = floor(random(3)); // we create 3 shapes and will show at random one of the 3
			let size = random(20, 50);

			if (shapeType === 0){
				ellipse(mouseX, mouseY, size, size);
			}
			else if (shapeType === 1){
                //draw triangle math
				triangle(
					mouseX, mouseY - size/2,
					mouseX - size/2, mouseY + size/2,
					mouseX + size/2, mouseY + size/2
				);
			}
			else if (shapeType === 2){
                //custom sizes of shapes 
				this.drawStar(mouseX, mouseY, size * 0.5, size, 5);
			}

			this.stamped = true;
		}
		// reset on mouse release
		if(!mouseIsPressed){
			this.stamped = false;
		}
	};

	// Draw star function - math
	this.drawStar = function(x, y, radius1, radius2, npoints){
		let angle = TWO_PI / npoints;
		let halfAngle = angle / 2.0;
		beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
			let sx = x + cos(a) * radius2;
			let sy = y + sin(a) * radius2;
			vertex(sx, sy);
			sx = x + cos(a + halfAngle) * radius1;
			sy = y + sin(a + halfAngle) * radius1;
			vertex(sx, sy);
		}
		endShape(CLOSE);
	};
}
