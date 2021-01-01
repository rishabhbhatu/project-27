class Rope{
    constructor(body1,body2,offsetX,offsety){

    this.offsetX=offsetX
    this.offsetY = offsetY
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
        this.rope=constraint,create(options)    
        World.add(world,this.rope)

        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    
    
fly() 
this.rope.bodyA=null;
   



    
    display()
    
    
        if(this.rope.bodyA)
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push ();
        stroke (48,22,8);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
}
    
    }   