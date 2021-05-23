class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_1.png",
                                    "Walking Frame/walking_1.png","Walking Frame/walking_1.png",
                                    "Walking Frame/walking_1.png","Walking Frame/walking_1.png",
                                    "Walking Frame/walking_1.png","Walking Frame/walking_1.png");
        
        this.bestMan = loadAnimation("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,80,options);
        this.radius = 50;
        World.add(world, this.umbrella)

        var pos = this.umbrella.position;
        bestMan = createSprite(pos.x - 10,pos.y + 65,300,300);
        bestMan.addAnimation("walkingPreson", this.image);
        bestMan.addAnimation("BestMan", this.bestMan);
        bestMan.scale = 0.45;
        // bestMan.change
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        // ellipseMode(RADIUS);
        // ellipse(pos.x,pos.y,80,80);
        
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount > 200){
            bestMan.changeAnimation("BestMan");
            bestMan.scale = 0.15;
        }
    }
}
