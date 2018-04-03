let brushes = [];
let no_of_brushes = 100;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(50);
	for(let _=0; _< no_of_brushes; _++){
		brushes.push(new Brush(random(5, 10)));
	}
}

function draw(){	
	brushes.map(brush => brush.paint());
}