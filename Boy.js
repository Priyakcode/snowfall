class Boy{
    constructor(x,y,width,height) {
        
        var options = {
            isStatic: true
        }
        this.width=width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("boy.png");
        Matter.World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
      
     }
    }