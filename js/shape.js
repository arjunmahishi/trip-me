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
    }

    render(){
        fill(this.color.r, this.color.g, this.color.b);
        if(this.type == "ellipse") {
            ellipse(this.x, this.y, this.size, this.size);
        }else{
            rect(this.x, this.y, this.size, this.size);  
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
    }
}