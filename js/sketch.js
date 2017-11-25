var mic = new p5.AudioIn();
// var amp;
var vol;


var back = ["red", "green", "black", "pink", "blue", "yellow", "voilet", "white", "gold", "silver"];

function setup(){
    // createCanvas(document.body.clientHeight, document.body.clientWidth);
    // amp = new p5.Amplitude();
    mic.start();
}

function draw(){
    vol = mic.getLevel();
    if(checkThreshold(vol)){
        console.log(vol);
        document.body.style.background = back[Math.floor(Math.random()*back.length)];
    }
}

function checkThreshold(vol){
    if(vol*100 > 2.6){
        return true;
    }
    return false;
}



