class Ball{
    constructor()
    {
        this.body=Bodies.circle(100,50,40)
        World.add(world,this.body);
    }
    display()
    {
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,40)
    }
}