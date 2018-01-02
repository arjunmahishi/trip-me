class Shape{
    constructor(){
        this.x = random(0, width);
        this.y = random(height + 100, height + 1000);
        this.speed = random(1, 10);
        this.size = random(20, 60);
        this.threshold = 50;
        this.color = {
            r: random(0, 256),
            g: random(0, 256),
            b: random(0, 256)
        }
        this.type = (random(1, 3) < 2) ? "square" : "ellipse";
        this.vFreq = random(-10, 10);
        this.bFreq = random(0, 2)
    }

    render(){
        fill(this.color.r, this.color.g, this.color.b);
        if(this.type == "ellipse") {
            ellipse(this.x, this.y, this.size, this.size);
        }else{
            // ellipse(this.x, this.y, this.size, this.size);
            // rect(this.x, this.y, this.size, this.size); 
            quad(this.x, this.y, this.x, this.y+this.size, this.x+this.size, this.y+this.size, this.x+this.size, this.y); 
        } 
    }

    react(vol){
        if(vol > this.threshold){
            if(this.y > 0){
                this.y -= this.speed;
            }else{
                this.y = random(height + 100, height + 1000);
            }
        }

        if(vol > this.threshold * 2) this.vFreq *= -1;
        if(vol > this.threshold / 2) this.vibrate();
        this.beat();
    }

    vibrate(){
        this.x += this.vFreq;
        if(this.x > width) this.x = 0;
        if(this.x < 0) this.x = width-this.size;
    }

    beat(){
        this.size += this.bFreq;
        if(this.size > 100 || this.size < 20) this.bFreq *= -1;
    }
}