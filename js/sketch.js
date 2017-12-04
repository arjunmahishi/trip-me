var mic = new p5.AudioIn();
var vol, bestVol = 0, leastVol = 999;

var back = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


function setup(){
    // createCanvas(document.body.clientHeight, document.body.clientWidth);
    // amp = new p5.Amplitude();
    mic.start();
}

function draw(){
    vol = mic.getLevel();
    if(checkThreshold(vol)){
        // console.log(vol);
        document.body.style.background = back[Math.floor(Math.random()*back.length)];
    }
}

function checkThreshold(vol){

    if(vol <= leastVol){
        leastVol = vol;
    }

    if(vol >= bestVol){
        bestVol = vol;
    }

    // document.querySelector("#amp-curr").innerHTML = vol;
    // document.querySelector("#amp-min").innerHTML = leastVol;
    // document.querySelector("#amp-max").innerHTML = bestVol;

    const slider = document.querySelector("#sensitivity");
    let sensitivity = (slider.max - slider.value + 0.01) + slider.min;

    if(vol*100 > sensitivity){
        return true;
    }
    return false;
}

function updateSensitivity(){
    const slider = document.querySelector("#sensitivity");
    let displayValue = Math.round((slider.value/slider.max) * 10);
    document.querySelector("#range-lable").innerHTML = "Sensitivity: " + displayValue;
}


updateSensitivity();