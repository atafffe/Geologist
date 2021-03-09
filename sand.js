class Sand {
    constructor(x,y,r){
        var options = {
            density: 5,
            friction: 1,
            restitution: 0.4
        }
        this.body = Bodies.circle(x,y,10,options);
        this.r = 10;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}