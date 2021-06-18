class Roof extends Baseclass{
    constructor(x,y){
      super(x,y,400,20)
  } 
   display(){
       super.display()
       fill("grey")
       rect(this.body.position.x,this.body.position.y,350,20);
       
   }

}