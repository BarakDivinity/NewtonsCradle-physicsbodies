class Baseclass{
    constructor(x,y,width,height){
        var option={
            isStatic:true
         }
          this.body=Bodies.rectangle(x,y,width,height,option);
          this.body.width=width;
          this.body.height=height;

          World.add(world,this.body);
          
       }
   
       display(){
        rectMode(CENTER);
        fill("blue");
        //rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        
     }
   }
