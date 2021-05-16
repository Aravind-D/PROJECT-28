class Bin{
  constructor(x,y,width,height){
    var option = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;

    this.Bin1 = loadImage ("dustbingreen.png")

    World.add(world, this.body);
  }
  display(){
    image(this.Bin1,500,550,120,120);
      var pos = this.body.position;
      rectMode(CENTER);
      fill("green")
      rect(pos.x, pos.y, this.width, this.height);
  }
}