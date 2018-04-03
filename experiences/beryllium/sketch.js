var x, y, speed=10;

function setup(){
	createCanvas(windowWidth, windowHeight);
	x = width/2;
	y = height/2;
}

function draw(){
	background(50);

	noStroke();
	fill(200, 0, 100);
	ellipse(x, y, 50, 50);

	if(x > width || x < 0) speed *= -1;

	x += speed;
}