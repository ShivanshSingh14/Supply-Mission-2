class Box{
    constructor(x,y,width,height){

        var boxoption={
          isStatic:true
        }

        this.box =Bodies.rectangle(x,y,width,height,boxoption);
        this.width = width;
        this.height=height;
        World.add(world,this.box);

    }
    display(){

        var position=this.box.position;
       
        rectMode(CENTER);
        fill("red")
        rect(position.x,position.y,this.width,this.height);
        
    }

} 