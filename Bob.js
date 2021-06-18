class Bob{
    constructor(x,y){
       var options={
           isStatic:false,
           restitution:1,

       }
        this.body=Bodies.circle(x,y,26,options);
        World.add(world,this.body);
        
    }
     display(){
         fill("purple")
         ellipseMode(RADIUS)
         ellipse(this.body.position.x,this.body.position.y,26,26);  
     } 
}
