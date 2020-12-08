
class Box extends Parent {
    constructor(x, y, width, height) {
     
      super(x,y,width,height);
      this.image= loadImage("images.png");
      this.Visiblity= 225;
      
    }
    display(){
      if(this.body.speed < 4){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image,this.body.position.x, this.body.position.y, this.width,this.height);
         pop();
       }
      }
      /*
      World.remove(world, this.body);
     push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      imageMode(CENTER);   
      image(this.image,0,0, this.width, this.height);
     
   
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
     */
      
      
  };
