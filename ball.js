class Ball{
    constructor(x,y,width,height,angle){
        this.body = Bodies.rectangle(x,y,width,height,{"frictionAir":0.005,"density":1})
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        push()
       var pos= this.body.position;
       var angle= this.body.angle
       translate(pos.x,pos.y)
       rotate(angle)
       rectMode(CENTER)
       fill("red")
        ellipse(0,0,this.width,this.height)
      pop()
    }

}