// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;
var previewBox;




function setup() {


	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);

	c.parent("content");

	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new eraserTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new sprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new ShapeTool());
	toolbox.addTool(new TextTool());
	toolbox.addTool(new RainbowBrushTool());
	toolbox.addTool(new CalligraphyPenTool());
	toolbox.addTool(new ShapeStampTool());
	toolbox.addTool(new HighlighterTool());
	toolbox.addTool(new StarBrushTool());
	toolbox.addTool(new NoteStampTool());

	let permanentOptions = select('#permanentOptions');

	//initialising custom color picker using our index.html to link it to show on palette
	let customColorPicker = createColorPicker('#ffffff');
	customColorPicker.parent(permanentOptions);
	customColorPicker.style('margin', '25px');
	customColorPicker.input(() => {

		colourP.selectedColour = customColorPicker.value();

		fill(customColorPicker.value());
		stroke(customColorPicker.value());
	});

	//setting up preview display box in colour palette section to show the colour picker
	previewBox = createDiv();
	previewBox.parent(select('.colourPalette')); 
	previewBox.style('margin', '5px');
	previewBox.style('color', 'white');
	previewBox.style('font-size', '12px');

	let currentTemplate = 'none';

	//setting up a grid button to clear background to white then draw grid lines(connects to function below)
	select('#gridButton').mousePressed(() => {
		background(255);
		drawGrid();
	});
	
	
	

	background(255);

	//creating a slider and label to do custom tool sizes (eg the size of the pen tool or size of note tool)
	freehandLabel = createSpan('');
	freehandLabel.parent('sliderContainer');

	freehandLabel.style('font-size', '11px');
	freehandLabel.style('color', 'black');
	freehandLabel.style('padding', '5px');
	freehandLabel.style('background-color', '#f0f0f0');
	freehandLabel.style('border', '2px solid #ccccccc');
	freehandLabel.style('border-radius', '20px');

	freehandSlider = createSlider(1, 20, 2);

	freehandSlider.parent('sliderContainer');
	//end of creating slider
}
//END OF SETUP

function draw() {

	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
	freehandLabel.html('Size of ' + toolbox.selectedTool.name + ': ' + freehandSlider.value());

	previewBox.html('Tool: ' + toolbox.selectedTool.name + ' | Color: ' + colourP.selectedColour);

}
//END OF DRAW

// draws a grid on the canvas in repeating patterns using lines
function drawGrid() {
	stroke(200);
	for (let x = 0; x < width; x += 20) line(x, 0, x, height);
	for (let y = 0; y < height; y += 20) line(0, y, width, y);
}

