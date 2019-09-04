
var bubble, bubble1,bubble2,bubble3, bubble4;
function setup(){
    createCanvas(400,400)
    
    bubble=new Bubble(50,100,50);
    bubble1=new Bubble(100,200,50);
    bubble2=new Bubble(200,400,50);
    bubble3=new Bubble(300,350,50);
    bubble4=new Bubble(250,350,50);

    console.log(bubble.x,bubble.y);
    
}
  

   


function draw(){
    background(0);
    
    bubble.display();
    bubble.move();
    bubble1.display();
    bubble1.move();
    bubble2.display();
    bubble2.move();
    bubble3.display();
    bubble3.move();
    bubble4.display();
    bubble4.move();

    
    }
    
