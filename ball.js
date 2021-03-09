class Ball {
    constructor(x,y,r){
        var options = {
            density: 1,
            friction: 5,
            restitution: 0.3
        }
        this.body = Bodies.circle(x,y,50,options);
        this.r = 50;
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