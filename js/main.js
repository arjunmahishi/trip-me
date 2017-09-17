var back = ["red", "green", "black", "pink", "blue", "yellow", "voilet", "white", "gold", "silver"];

var m = 0;

function trip(){
    $("#home").hide();
	$("#trip").show();
	start();
}

function form(){
	$("#home").show();
	$("#trip").hide();
	stop();
}

function createSpans(text){
	var html = "";
	for(var i=0;i<text.length;i++){
		html += `<span class="sp" id="${i}">${text[i]}</span>`;
	}
	document.getElementById("text-placeholder").innerHTML = html;
	m = text.length;
}

function colors(){

	document.getElementById("text-placeholder").innerHTML = "";
	
	var text = document.getElementById("text").value;
	if(text != ""){
		createSpans(text);
	}else{
		createSpans("TRIP ME!");
	}

	for(var j=0;j<m;j++){
		document.getElementById("" + j).style.color = back[Math.floor(Math.random()*back.length)];
		// document.getElementById("" + j).style.margin = Math.floor(Math.random()*10) + "rem";
	}

	document.body.style.background = back[Math.floor(Math.random()*back.length)];
}

var secession = setInterval(()=>{}, 1000);

function start(){
	secession = setInterval(colors, 50);
}

function stop(){
	clearInterval(secession);
}

form();