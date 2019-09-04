class Bubble{

    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
       
       
    }

    move(){
        this.x=this.x+random(-2,2);
        this.y=this.y+random(-5,5);
    }

    display(){
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x,this.y,this.r);
    }
}

