let experiences = [
	"hydrogen",
	"helium",
	"lithium"
];

const randomHexColor = () => {
    let n = (Math.random()*0xfffff|0).toString(16);
    return '#' + (n.length !== 6
        ? (Math.random()*0xf|0).toString(16) + n : n);
}

const openExp = (exp) => location.pathname = `experiences/${exp}.html`;

experiences.map(exp => {
	var card = `
		<div class="exp-card" onclick="openExp('${exp}')">
            <div class="exp-card-text">${exp}</div>
        </div>
	`;

	document.querySelector(".exp-list").innerHTML += card;
})

setInterval(() =>{
	document.querySelector(".nav").style.backgroundColor = randomHexColor();
}, 250);