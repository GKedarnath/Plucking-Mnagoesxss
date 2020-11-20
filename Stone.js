class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution :0,
          friction:1,
          density:1.2,
      }

      this.body = Bodys.circle(x,y,radius)
      this.radius = radius
          
      
    }
display(){
image(stone,x,y,r);

}




}