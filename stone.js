class Stone {
    constructor(x,y){
        var options = {
            density: 12,
            friction: 0.9,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,130,130,options);
        this.width = 130;
        this.height = 130;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}