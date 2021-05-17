class Snow{
    constructor(x,y,r)
    {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("snow5.webp");
        Matter.World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill("white");
       ellipseMode(CENTER);
       ellipse(0, 0, this.r);
       image(this.image,pos.x,pos.y,this.r,this.r + 40);
       image.scale= 0.1;
       pop();
     }
    }