class Iron {
    constructor(x,y){
        var options = {
            density: 30,
            friction: 3,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,60,60,options);
        this.width = 60;
        this.height = 60;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("grey");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}