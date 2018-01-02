class Brush{
	constructor(freq){
		this.x = random(0, width);
		this.y = random(0, height);
		this.size = 40;
		this.sizeRule = {min: 0, max: 10, decent: 5};
		this.freq = freq;
		this.color = {
			r: 200,
			g: 0,
			b: 100
		};
	}

	render(){
		noStroke();
		fill(this.color.r, this.color.g, this.color.b);
		rect(this.x, this.y, this.size, this.size);
	}

	paint(){
		this.x += random(-this.freq, this.freq);
		this.y += random(-this.freq, this.freq);

		this.morphColor();
		this.morphSize();
		this.validatePosition();
		this.render();
	}

	morphColor(){
		this.color.r += random(-this.freq, this.freq);
		this.color.g += random(-this.freq, this.freq);
		this.color.b += random(-this.freq, this.freq);

		this.validateColor();
	}

	morphSize(){
		this.size += random(-this.freq, this.freq);
		this.validateSize();
	}

	validatePosition(){
		if(this.x > width) this.x = 0;
		if(this.x < 0) this.x = width;

		if(this.y > height) this.y = 0;
		if(this.y < 0) this.y = height;
	}

	validateColor(){
		if(this.color.r > 255 || this.color.r < 0) this.color.r = 112;
		if(this.color.g > 255 || this.color.g < 0) this.color.g = 112;
		if(this.color.b > 255 || this.color.b < 0) this.color.b = 112;
	}

	validateSize(){
		if(this.size > this.sizeRule.max || this.size < this.sizeRule.min)
			this.size = this.sizeRule.decent;
	}

	// EXTRA //
	follow(differentBrush){
		this.x = differentBrush.x + this.size;
		this.y = differentBrush.y + this.size;
		this.paint();
	}
}