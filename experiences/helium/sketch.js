//// Helium ////

var mic = new p5.AudioIn(), vol, bestVol=400;

function setup(){
	mic.start();
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw(){
	vol = parseInt(mic.getLevel() * 1000);
	if(vol > bestVol) bestVol = vol;
	let n = map(vol, 0, bestVol, 0, 10);
	for(let _=0;_ < n;_++){
		renderCircle();		
	}
}

const renderCircle = () => {
	var size = random(20, 60);
	stroke(0);
	strokeWeight(3);
	fill(random(0, 256), random(0, 256), random(0, 256));
	ellipse(random(0, width), random(0, height), size, size);
}