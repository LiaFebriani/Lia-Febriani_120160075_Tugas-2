let zombie = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 5; i<1000; i++){
    zombie.push(new Mover());
  }
}

function draw() {
  background(20,191,255);
  for (let i=0; i<zombie.length; i++){
    zombie[i].gerak();
    zombie[i].tampil();
    zombie[i].cekBatas();
  }
} 


class Mover {
  constructor(){
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjangLebar = random(2,16);
  }
  
  tampil(){
    noStroke();
    fill(random(0,255,255), random(255), random(13,124,18));
    rect(this.location.x, 
             this.location.y,
            this.panjangLebar,
            this.panjangLebar);
  }
  
  gerak(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = random(1,50);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}