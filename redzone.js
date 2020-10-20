class redzone{
    constructor(x,y,width, height){
        var options={isStatic: true}
this.reds=Bodies.rectangle(x,y,width,height,options);

this.width=width;
this.height=height;
World.add(world,this.reds);
    }

    display() 
    {
      var res = this.reds.position;
      rectMode(CENTER)
      fill("red")  
      noStroke();
      rect(res.x,res.y,this.width,this.height);

    }
}