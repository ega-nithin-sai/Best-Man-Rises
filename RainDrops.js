class RainDrop{
    constructor(x,y){
        var options = {
            restitution:0.5,
            friction:0.5,
            density:1
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);

        this.display();
    }
    display(){
        push();
            fill("blue");
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,5,5);
        pop();
        if(this.body.position.y > 700){
            Body.setPosition(this.body,{x:random(0,400),y:0});
            Body.setVelocity(this.body,{x:0,y:5});
        }
    }
}