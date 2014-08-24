 //-------------starting Display------------------

 
 
//---------------------------------------------




function start(){
    
    //-------------------Start--------------------------

    
    
      //-------------------Remove Rules--------------------------
      
       document.getElementById('start').innerHTML= ""
      
      
      
      
        //---------------------------------------------
    
   
    //-------------------Prelims--------------------------
var canvas = document.getElementById( "canvas" );

// Get our 2D context for drawing
var ctx = canvas.getContext( "2d" );
 
// Frames-per-second
var FPS = 40; 

//generating ball speed
function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}


var end=false

function stop(){
end=true   
    
}
//---------------------------------------------






    //-------------------Ball 1--------------------------
var i=0; 
  
  
 //----------------------Remove start button-----------------------
 
 document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
 
 
 
 //---------------------------------------------
  
  
  
  
  
  
  
var ball = {
    
    
    
    //---------------Starting Stats------------------------------

    x: 250,
    y: 50,
    vx: randNum(100,300),
    vy: randNum(100,300),
    ax: 0,
    ay: 0,
    radius: 20,
    color: "red",
    
    //---------------------------------------------

    
     
     
    //-------Drawing Ball--------------------------------------

    draw: function() {
       ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    },
    
    //---------------------------------------------



    

    //------------Animating Ball---------------------------------
    
    update: function() {
        this.vx += this.ax / FPS;
        this.vy += this.ay / FPS;
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
        
        
        
        
      
    //------------------Collision Detection---------------------------
        if ( (this.x- this.radius) < 0 ) {
            this.x = this.radius;
            this.vx=-this.vx*1.015
          this.vy = this.vy*1.015;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
        }
        if ((this.x + this.radius) > canvas.width) {
            this.x = canvas.width-this.radius;
           this.vx=-this.vx*1.015
          this.vy = this.vy*1.015;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick='stop()'>"; 
        }
        if ( this.y-this.radius < 0 ) {
            this.y = this.radius;
            this.vx=this.vx*1.015
          this.vy = -this.vy*1.015;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick='stop()'>"; 
        }
        if ( this.y +this.radius > canvas.height ) {
            this.y = canvas.height-this.radius;
            this.vx=this.vx*1.015
          this.vy = -this.vy*1.015;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick='stop()'>"; 
        }
       
        
    //----------End Collision-----------------------------------

        
        
        
    }
    
    //----------End Animate-----------------------------------

    
};


    //----------------End Ball 1-----------------------------



//-------------Ball 2-------------------------------





    //----------Starting Stats-----------------------------------

var controlledBall = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    radius: 20,
    color: "blue",
   
      draw: function() {
       ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
   
    },
    //--------------------------------------------
    
    
    
    
    //------------Update ball 2--------------------------------
    update: function() {
        this.vx += this.ax / FPS;
        this.vy += this.ay / FPS;
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
     
        
        
        
    //---------------Collision Detection------------------------------

       if ( (this.x- this.radius) < 0 ) {
            this.x = this.radius;
            this.vx = 0;
        }
        if ((this.x + this.radius) > canvas.width) {
            this.x = canvas.width-this.radius;
            this.vx = 0;
        }
        if ( this.y-this.radius < 0 ) {
            this.y = this.radius;
            this.vy = 0;
        }
        if ( this.y +this.radius > canvas.height ) {
            this.y = canvas.height-this.radius;
            this.vy = 0;
            window.end=true
        }
        //-------End Detection-------------------------------------
        
        
        
    }
    
    //----------------End Update-----------------------------

    
    
};


    //---------------End Ball 2------------------------------




//----------------Controll Ball 2---------------
window.onkeydown = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
      e.preventDefault();
    if ( code === 37 ) {
    // Left key
    controlledBall.vx=-300;
} else if ( code === 38 ) {
    // Up key
     controlledBall.vy=-300;
} else if ( code === 39 ) {
    // Right key
    controlledBall .vx=300;
} else if ( code === 40 ) {
    // Down key
    controlledBall .vy=300;
}
};
//--------------------------------------------




//-----------------------Stop Ball 2---------------------
window.onkeyup = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
      e.preventDefault();
    if ( code === 37 ) { 
  controlledBall .vx=0;
} else if ( code === 38 ) {
  controlledBall .vy=0;
} else if ( code === 39 ) {
   controlledBall .vx=0;
} else if ( code === 40 ) { 
 controlledBall .vy=0;
}
};
//--------------------------------------------





//---------------------------Game loop draw function ----------------- 
function draw2() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ball.draw();
    controlledBall.draw();
}

// Game loop update function
function update2() {
    ball.update();
        controlledBall.update();
}

function tick2(settings) {
    if(end){
    }
    else{
        draw2();
    update2();
    intersects(ball.x, ball.y, ball.radius,   controlledBall.x, controlledBall.y, controlledBall.radius);
    }
}

var gameLoop=window.setInterval( tick2, 1000 / FPS );
//---------------------------------------------





 
//-------------------Inter-Ball Collision detection-------------------------
function intersects(x1, y1, r1, x2, y2, r2) {
    if (
        (  Math.abs(x1-x2)*Math.abs(x1-x2)  )+ 
        (  Math.abs(y1-y2)*Math.abs(y1-y2)  )< 
        (Math.abs(r1+r2)*Math.abs(r1+r2))
        ) 
        {
           document.getElementById("div").innerHTML= "Score:"+i+ "<br><input type=button value=Restart  id=button2 onclick=start()> <input type=button value='Try Hard'  id=button2 onclick=hard()>";
           
           document.getElementById("start").innerHTML= "<br>You lost! your score was  "+i
           end=true
         
           
        }
   
       
    

   
}

 
 

//--------------------------------------------






//--------------End Function-------------------------------

if(end){
    window.clearInterval(gameLoop);
    
}
    




//---------------------------------------------





//------------------End--------------------------

}




function hard(){
    
    //-------------------Start--------------------------

    
    
      //-------------------Remove Rules--------------------------
      
       document.getElementById('start').innerHTML= ""
      
      
      
      
        //---------------------------------------------
    
   
    //-------------------Prelims--------------------------
var canvas = document.getElementById( "canvas" );

// Get our 2D context for drawing
var ctx = canvas.getContext( "2d" );
 
// Frames-per-second
var FPS = 40; 

//generating ball speed
function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}


var end=false

function stop(){
end=true   
    
}
//---------------------------------------------






    //-------------------Ball 1--------------------------
var i=0; 
  
  
 //----------------------Remove start button-----------------------
 
 document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
 
 
 
 //---------------------------------------------
  
  
  
  
  
  
  
var ball = {
    
    
    
    //---------------Starting Stats------------------------------

    x: 250,
    y: 50,
    vx: randNum(150,400),
    vy: randNum(150,400),
    ax: 0,
    ay: 0,
    radius: 20,
    color: "red",
    
    //---------------------------------------------

    
     
     
    //-------Drawing Ball--------------------------------------

    draw: function() {
       ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
    },
    
    //---------------------------------------------



    

    //------------Animating Ball---------------------------------
    
    update: function() {
        this.vx += this.ax / FPS;
        this.vy += this.ay / FPS;
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
        
        
        
        
      
    //------------------Collision Detection---------------------------
        if ( (this.x- this.radius) < 0 ) {
            this.x = this.radius;
            this.vx=-this.vx*1.03
          this.vy = this.vy*1.03;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
        }
        if ((this.x + this.radius) > canvas.width) {
            this.x = canvas.width-this.radius;
           this.vx=-this.vx*1.03
          this.vy = this.vy*1.03;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
        }
        if ( this.y-this.radius < 0 ) {
            this.y = this.radius;
            this.vx=this.vx*1.03
          this.vy = -this.vy*1.03;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
        }
        if ( this.y +this.radius > canvas.height ) {
            this.y = canvas.height-this.radius;
            this.vx=this.vx*1.03
          this.vy = -this.vy*1.03;
        i=i+1; document.getElementById('div').innerHTML= "Score:"+i  + 
              "<BR><input type=button value=End  id=button onclick=stop()>"; 
        }
       
        
    //----------End Collision-----------------------------------

        
        
        
    }
    
    //----------End Animate-----------------------------------

    
};


    //----------------End Ball 1-----------------------------



//-------------Ball 2-------------------------------





    //----------Starting Stats-----------------------------------

var controlledBall = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    radius: 20,
    color: "blue",
   
      draw: function() {
       ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
   
    },
    //--------------------------------------------
    
    
    
    
    //------------Update ball 2--------------------------------
    update: function() {
        this.vx += this.ax / FPS;
        this.vy += this.ay / FPS;
        this.x += this.vx / FPS;
        this.y += this.vy / FPS;
     
        
        
        
    //---------------Collision Detection------------------------------

       if ( (this.x- this.radius) < 0 ) {
            this.x = this.radius;
            this.vx = 0;
        }
        if ((this.x + this.radius) > canvas.width) {
            this.x = canvas.width-this.radius;
            this.vx = 0;
        }
        if ( this.y-this.radius < 0 ) {
            this.y = this.radius;
            this.vy = 0;
        }
        if ( this.y +this.radius > canvas.height ) {
            this.y = canvas.height-this.radius;
            this.vy = 0;
            window.end=true
        }
        //-------End Detection-------------------------------------
        
        
        
    }
    
    //----------------End Update-----------------------------

    
    
};


    //---------------End Ball 2------------------------------




//----------------Controll Ball 2---------------
window.onkeydown = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
      e.preventDefault();
    if ( code === 37 ) {
    // Left key
    controlledBall.vx=-300;
} else if ( code === 38 ) {
    // Up key
     controlledBall.vy=-300;
} else if ( code === 39 ) {
    // Right key
    controlledBall .vx=300;
} else if ( code === 40 ) {
    // Down key
    controlledBall .vy=300;
}
};
//--------------------------------------------




//-----------------------Stop Ball 2---------------------
window.onkeyup = function( e ) {
    e = e || window.event;
    var code = e.keyCode;
      e.preventDefault();
    if ( code === 37 ) { 
  controlledBall .vx=0;
} else if ( code === 38 ) {
  controlledBall .vy=0;
} else if ( code === 39 ) {
   controlledBall .vx=0;
} else if ( code === 40 ) { 
 controlledBall .vy=0;
}
};
//--------------------------------------------





//---------------------------Game loop draw function ----------------- 
function draw2() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ball.draw();
    controlledBall.draw();
}

// Game loop update function
function update2() {
    ball.update();
        controlledBall.update();
}

function tick2(settings) {
    if(end){
    }
    else{
        draw2();
    update2();
    intersects(ball.x, ball.y, ball.radius,   controlledBall.x, controlledBall.y, controlledBall.radius);
    }
}

var gameLoop=window.setInterval( tick2, 1000 / FPS );
//---------------------------------------------





 
//-------------------Inter-Ball Collision detection-------------------------
function intersects(x1, y1, r1, x2, y2, r2) {
    if (
        (  Math.abs(x1-x2)*Math.abs(x1-x2)  )+ 
        (  Math.abs(y1-y2)*Math.abs(y1-y2)  )< 
        (Math.abs(r1+r2)*Math.abs(r1+r2))
        ) 
        {
           document.getElementById("div").innerHTML= "Score:"+i+ "<br><input type=button value=Restart  id=button2 onclick=hard()>   <input type=button value='Try Easy'  id=button2 onclick=start()>";
           document.getElementById("start").innerHTML= "<br>You lost! your score was  "+i
           end=true
         
           
        }
   
       
    

   
}

 
 

//--------------------------------------------






//--------------End Function-------------------------------

if(end){
    window.clearInterval(gameLoop);
    
}
    




//---------------------------------------------





//------------------End--------------------------

}




