class Paper{
    constructor(x,y,radius){
     
    var options ={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic': false
        
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x,this.y,this.radius,options); 
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
     ellipseMode(RADIUS);
     fill("White");
      ellipse(0,0,this.radius,this.radius);
    pop();
}
}