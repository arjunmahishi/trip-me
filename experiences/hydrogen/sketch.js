var mic = new p5.AudioIn();
var vol, size, threshold = 200;
var shapes = [];
var rChange = 1, gChange = 1, bChange = 1;
var rValue, gValue, bValue;

function setup(){
    mic.start();
    createCanvas(windowWidth, windowHeight);
    
    rValue = random(0, 256); 
    gValue = random(0, 256);
    bValue = random(0, 256);

    for(let _=0; _< 100; _++){
        shapes.push(new Shape());
    }
}

function draw(){
    vol = parseInt(mic.getLevel() * 1000);

    if(rValue > 255 || rValue < 0) rChange *= -1;
    if(gValue > 255 || gValue < 50) gChange *= -1;
    if(bValue > 255 || bValue < 50) bChange *= -1;

    if(vol > 0) {
        rValue += rChange;
        gValue += gChange;
        bValue += bChange;
    }

    background(rValue, gValue, bValue);

    stroke(0);
    strokeWeight(3);
    for (var i = shapes.length - 1; i >= 0; i--) {
        shapes[i].render();
        shapes[i].react(vol);
    };
}