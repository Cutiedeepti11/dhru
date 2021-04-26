class Ground{
    constructor()
    {
        this.body=Bodies.rectangle(200,200,40,40)
        World.add(world,this.body);
    }
    display()
    {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,40,50)
    }
}