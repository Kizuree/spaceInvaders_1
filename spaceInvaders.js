
//SMALL LENGTH: 20,20
//MEDIUM LENGTH: 30,30
//LARGE LENGTH: 40,40



function setup(){
    createCanvas(700,600)
    

    
}
/*const enemies = [
    140,100,40,40]
    [140,150,30,30],
    [140,200,20,20],
    [140,250,20,20],
    [280,100,40,40],
    [280,150,30,30],
    [280,200,20,20],
    [280,250,20,20],
    [420,100,40,40],
    [420,150,30,30],
    [420,200,20,20],
    [420,250,20,20],
    [560,100,40,40],
    [560,150,30,30],
    [560,200,20,20],
    [280,250,20,20]*/
    
   
   /* enemies[0] =140,100,40,40;
    enemies[1] =[140,150,30,30],
    enemies[2] =[140,200,20,20],
    enemies[3] =[140,250,20,20],
    enemies[4] =[280,100,40,40],
    enemies[5] =[280,150,30,30],
    enemies[6] =[280,200,20,20],
    enemies[7] =[280,250,20,20],
    enemies[8] =[420,100,40,40],
    enemies[9] =[420,150,30,30],
    enemies[10] =[420,200,20,20],
    enemies[11] =[420,250,20,20],
    enemies[12] =[560,100,40,40],
    enemies[13] =[560,150,30,30],
    enemies[14] =[560,200,20,20],
    enemies[15] =[280,250,20,20]*/

    function enemyCords(numb){
        fill("green")
        rect(enemies[numb])


    }
    
    let x0 = 350
    let x = 570
    let x2 = 150
    let x3 = 280
    let x4 = 420

    let y0 = 515
    let y = 300
    let y2 = 300
    let y3 = 300
    let y4 = 300
   
    let w = 10
    let w2 = 10
    let w3 = 10
    let w4 = 10

    let h = 10
    let h2 = 10
    let h3 = 10
    let h4 = 10

    
    let xspeed0 = 10
    
    let yspeed0 = 10
    let yspeed = 1.5
    let yspeed2 = 2
    let yspeed3 = 2.5
    let yspeed4 = 3 
    
   let colorOfShip = "red"

function draw(){
background("black")

//enemyCords(0)




    //COLUMN 1
    fill("green")
    rect(140,100,20,20)

    fill("green")
    rect(140,150,20,20);

    fill("green")
    rect(140,200,20,20)

    fill("green")
    rect(140,250,20,20)

    //COLUMN 2
    fill("green")
    rect(280,100,20,20)

    fill("green")
    rect(280,150,20,20);

    fill("green")
    rect(280,200,20,20)

    fill("green")
    rect(280,250,20,20)

    //COLUMN 3 
    fill("green")
    rect(420,100,20,20)

    fill("green")
    rect(420,150,20,20);

    fill("green")
    rect(420,200,20,20)

    fill("green")
    rect(420,250,20,20)

    //COLUMN 4
    fill("green")
    rect(560,100,20,20)

    fill("green")
    rect(560,150,20,20);

    fill("green")
    rect(560,200,20,20)

    fill("green")
    rect(560,250,20,20)

   // fill("red")
    ellipse(x,y,w,h)
    
    y = y + yspeed
    y2 = y2 + yspeed2
    y3 = y3 + yspeed3
    y4 = y4 + yspeed4
    
    if(y> 600 ){
        y = 300
        
        
        


   
        
    }

    ellipse(x2,y2,w2,h2)
     if(y2>600){
        y2 = 300
    }
    ellipse(x3,y3,w3,h3)
     if(y3>600){
        y3 = 300
    }
    ellipse(x4,y4,w4,h4)
    if(y4>600){
        y4 = 300
    }
   
    if(x3 >=  x0  && x3 <= x0 + 25 &&y3 >=y0 ){
    colorOfShip = 0
    
    }
    else if(x4 >=  x0  && x4 <= x0 + 25 &&y4 >=y0 ){
        colorOfShip = 0
        
    }
    else if(x2 >=  x0  && x2 <= x0 + 25 &&y2 >=y0 ){
        colorOfShip = 0
        
    }
    else if(x >=  x0  && x <= x0 + 25 &&y >=y0 ){
        colorOfShip = 0
        
    }





    fill(colorOfShip)
    rect(x0,y0,25,25)
    if(y0>600){
        y0 =300
    }

    
    




    
      
    
    if (keyIsDown (LEFT_ARROW)){
        x0 = x0-xspeed0
      } else if (keyIsDown (RIGHT_ARROW)) {
        x0 = x0+xspeed0
      }

      
    }



 

