var mic = new p5.AudioIn();
var vol, size, bestVol = 0, leastVol = 999, threshold = 200;
var shapes = [];
var bgData = {
    r: 50,
    g: 50,
    b: 50
};

function setup(){
    mic.start();
    createCanvas(windowWidth, windowHeight);
    for(let _=0; _< 100; _++){
        shapes.push(new Shape());
    }
}

function draw(){
    vol = parseInt(mic.getLevel() * 1000);
    if(vol > threshold) {
        bgData = {
            r: random(255),
            g: random(255),
            b: random(255)
        };
    }

    background(bgData.r, bgData.g, bgData.b);

    if(vol > bestVol) bestVol = vol;
    if(vol < leastVol) leastVol = vol;

    text(""+vol, width/2, height/2);
    text("Best: "+bestVol, width/2, height/2 + 20);

    stroke(0);
    strokeWeight(3);
    for (var i = shapes.length - 1; i >= 0; i--) {
        shapes[i].render();
        shapes[i].react(vol);
    };
}