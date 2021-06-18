class Rope{
    constructor(Body1,Body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:Body1,
            bodyB:Body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }

    display(){
        var pointA=this.Rope.bodyA.position
        var pointB=this.Rope.bodyB.position

        var AnchorX=pointB.x+this.offsetX;
        var AnchorY=pointB.y+this.offsetY;

        strokeWeight(5);
        stroke("white")
        line(pointA.x,pointA.y,AnchorX,AnchorY);
    }
}