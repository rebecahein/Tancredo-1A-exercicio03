let cor;
let posicaohorizontal;
let posicaovertical;
let posicaohorizontal2;
let posicaovertical2; 

function setup() {
  createCanvas(400, 400);
  background('red');
  cor = color(random(0,255),random(0,255), random(0,255))
  posicaohorizontal = 0;
  posicaovertical =random(height);
   
  posicaohorizontal2 = 0;
  posicaovertical2 =random(height)
  
}



function draw() {
  fill(cor);
  circle(posicaohorizontal,posicaovertical, 50);
  circle(posicaohorizontal2,posicaovertical2, 50);
  
  posicaohorizontal+= random(1, 4)
  posicaovertical+= random(-3, 3)
  posicaohorizontal2+= random(1, 4)
  posicaovertical2+= random(-3, 3)
 
  
  if(mouseIsPressed)  cor = color (random(0,255),random(0,255), random(0,255)), (random(0,100))
                                                                                       
  
 
     
}