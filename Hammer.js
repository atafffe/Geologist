class Hammer {
    constructor(x,y){
        var options = {
            density: 2,
            friction: 1,
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,180,40,options);
        this.width = 180;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("orange");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}