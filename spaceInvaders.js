
let x0 = 350
    let x = 570
    let x2 = 150
    let x3 = 280
    let x4 = 420
    let x5 = 0

    let enemyx1 = 140
    let enemyx2 = 280
    let enemyx3 = 420
    let enemyx4 = 560

    let enemyY1 = 250
    let enemyY2 = 250
    let enemyY3 = 250
    let enemyY4 = 250

    let y0 = 515
    let y = 300
    let y2 = 300
    let y3 = 300
    let y4 = 300
    let y5 = 0
   
    let w = 10
    let w2 = 10
    let w3 = 10
    let w4 = 10
    let w5 = 10

    let h = 10
    let h2 = 10
    let h3 = 10
    let h4 = 10
    let h5 = 10

    
    let xspeed0 = 10
    
    let yspeed0 = 10
    let yspeed = 1.5
    let yspeed2 = 2
    let yspeed3 = 2.5
    let yspeed4 = 3 
    let yspeed5 = 5

   let colorOfShip = "red"
   let colorOfEnemy1 = "green"
   let colorOfEnemy2 = "green"
   let colorOfEnemy3 = "green"
   let colorOfEnemy4 = "green"
   let black = "black"
   let green1 = "green"
   let green2 = "green"
   let green3 = "green"
   let green4 = "green"
   let shipBallColor = "red"
   let score = 0
function gameOver(){
    textSize(100)
    fill("red")
     text('Game Over',100,300)
     text('Score =  '+score,100,500)
}
   function youWin(){
        gameOver()
         colorOfShip = black
         shipBallColor = black
   }

   function youLose(){
    gameOver()
    colorOfEnemy1 = "black"
    colorOfEnemy2 = "black"
    colorOfEnemy3 = "black"
    colorOfEnemy4 = "black"
    green1 = "black"
    green2 = "black"
    green3 = "black"
    green4 = "black"
   
   }


function setup(){
    createCanvas(700,600)
}

    
    

function draw(){
background("black")
  

    fill(colorOfEnemy1)
    rect(enemyx1,enemyY1,20,20)

    

    fill(colorOfEnemy2)
    rect(enemyx2,enemyY2,20,20)



    fill(colorOfEnemy3)
    rect(enemyx3,enemyY3,20,20)


    fill(colorOfEnemy4)
    rect(enemyx4,enemyY4,20,20)

    
    
    y = y + yspeed
    y2 = y2 + yspeed2
    y3 = y3 + yspeed3
    y4 = y4 + yspeed4
    y5 = y5 - yspeed5
   
 
    
    if(y> 600 ){
        y = 300
        
        
    }
    //Enemy1 Ball
    fill(green1)
    ellipse(x,y,w,h)

    //Enemy2 Ball
    fill(green2)
    ellipse(x2,y2,w2,h2)
     if(y2>600){
      y2 = 300
    }
    //Enemy3 Ball
    fill(green3)
    ellipse(x3,y3,w3,h3)
     if(y3>600){
        y3 = 300
    }
    //Enemy4 Ball
    fill(green4)
    ellipse(x4,y4,w4,h4)
    if(y4>600){
        y4 = 300
    }

    

    //Battleship Ball
    fill(shipBallColor)
    ellipse(x5,y5,w,h)
    if(y5<300){
    w5 = 0
    h5 = 0
    }
   

    if(x3 >=  x0  && x3 <= x0 + 25 &&y3 >=y0 && y3<550 ){
    colorOfShip = 0
    
    }
    else if(x4 >=  x0  && x4 <= x0 + 25 &&y4 >=y0 && y4<550){
        colorOfShip = 0
        
    }
    else if(x2 >=  x0  && x2 <= x0 + 25 &&y2 >=y0&& y2<550 ){
        colorOfShip = 0
        
    }
    else if(x >=  x0  && x <= x0 + 25 &&y >=y0 && y<550 ){
        colorOfShip = 0
        
    }

        if(x5 <= enemyx1 +25 && x5>= enemyx1 &&y5 ==enemyY1){
            colorOfEnemy1 = "black"
            green2 = "black"
            shipBallColor =  "black"
            x2 = 1000
            y2 = 1000
            score = score + 1
        }

        if(x5 <= enemyx2 +25 && x5>= enemyx2 &&y5 ==enemyY2){
            colorOfEnemy2 = "black"
            green3 = "black"
            shipBallColor =  "black"
            x3 = 1000
            y3 = 1000
            score = score + 1
        }

        if(x5 <= enemyx3 +25 && x5>= enemyx3 &&y5 ==enemyY3){
            colorOfEnemy3 = "black"
            green4 = "black"
            shipBallColor =  "black"
            x4 = 1000
            y4 = 1000
            score = score + 1
        }

        if(x5 <= enemyx4 +25 && x5>= enemyx4 &&y5 ==enemyY4){
            colorOfEnemy4 = "black"
            green1 = "black"
            shipBallColor =  "black"
            x = 1000
            y = 1000
            score = score + 1
        }
        //YOU WIN
        if(colorOfEnemy1 =="black" && colorOfEnemy2 == "black" && colorOfEnemy3 == "black"&& colorOfEnemy4 == "black"){

            youWin()

        }
        //GAMEOVER YOU LOSE
         if(colorOfShip == 0){
            youLose()
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


    

    function keyPressed(){
        if(keyCode=== 32){
            x5 = x0
            y5 = y0
            shipBallColor = "red"
        }

    }
        
    

   
 

