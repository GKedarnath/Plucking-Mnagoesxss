class Mango {
    constructor(x,y,radius) {
      var options = {
         isStatic: true,
         restitution:0,
         friction:1

        
   
      }
      this.body = Bodys.circle(x,y,radius)
      this.radius = radius

    }
display(){
image(mango,x,y,radius);
image(mango2,x,y,radius);
image(mango3,x,y,radius);
image(mango4,x,y,radius);
image(mango5,x,y,radius);
image(mango6,x,y,radius);
}


}
