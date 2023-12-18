// Rectangle Collision Easy 
// Canvas Setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let rectX = 20; 
let rectY= 350; 
let size = 30; 

let upPressed = false; 
let downPressed = false; 
let rightPressed = false; 
let ArrowUp = false; 
let ArrowDown = false; 
let ArrowLeft = false; 
let ArrowRight = false; 

let walls = [];
walls.push({ x: 500, y: 0, w: 20, h: 200 });
walls.push({ x: 200, y: 100, w: 150, h: 20 });
walls.push({ x: 100, y: 400, w: 20, h: 100 });
walls.push({ x: 400, y: 300, w: 300, h: 20 });
walls.push({ x: 300, y: 200, w: 60, h: 20 });

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

    //Player 
    ctx.fillStyle = "pink"; 
    ctx.fillRect(rectX, rectY, size, size)



  // Draw Walls
  ctx.fillStyle = "rgb(253, 0, 156)";
  for (let i = 0; i < walls.length; i++) {
    let wall = walls[i];
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  }

//   for (let i = 0; i <walls.length; i++) {
//     let wall = walls[i];
//     if (rectX < wall.x + wall.w &&
//       rectX + size > wall.x &&
//       rectY < wall.y + wall.h &&
//       rectY + size > wall.y
//   ) {
//       rectX = 20;
//       rectY = 300;
//    }
//   }

//   if (rectX < 0 ||
//     rectX + size > cnv.width ||
//     rectY < 0 ||
//     rectY + size > cnv.height) {
//       rectX = 20;
//       rectY = 300;
//     }

  // Animation Loop
  requestAnimationFrame(draw);
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(e) {
    //Check for keys pressed
  if (e.code === "ArrowUp") {
      upPressed = true;
    } else if (e.code === "ArrowDown") {
      downPressed = true;
    } else if (e.code === "ArrowLeft") {
      leftPressed = true;
    } else if (e.code === "ArrowRight") {
      rightPressed = true;
  }

  if (upPressed) {
      rectY -= 7;
    } else if (downPressed) {
      rectY += 7;
    } else if (leftPressed) {
      rectX -= 7;
    } else if (rightPressed) {
      rectX += 7;
    }
    for (let i = 0; i <walls.length; i++) {
        let wall = walls[i];
        if (rectX < wall.x + wall.w &&
          rectX + size > wall.x &&
          rectY < wall.y + wall.h &&
          rectY + size > wall.y) {
            if (upPressed) {
                rectY = wall.y + wall.h; 
            } else if (downPressed){
                rectY = wall.y - size; 
            } else if (leftPressed){
              rectX = wall.x + wall.w
            } else if (rightPressed) {
                rectX = wall.x - size; 
            }
          } 
        
    }
}

function keyupHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = false;
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    } else if (e.code === "ArrowLeft") {
      leftPressed = false;
  } else if (e.code === "ArrowRight") {
      rightPressed = false;
  } 
}