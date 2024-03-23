const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById("game");
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = "./images/PacMan1.png";
  newimg.width = 100;

  // TODO: set position here
  newimg.style.left = position.x + "px";
  newimg.style.top = position.y + "px";

  // TODO add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

  let frame = 0;
function update() {
  frame++;

  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;

    // Animate mouth: switching between open and closed every 10 frames
    if (frame % 10 === 0) {
      if (item.newimg.src.includes('PacMan1.png')) {
        item.newimg.src = './images/PacMan2.png';
      } else if ((item.newimg.src.includes('PacMan3.png'))){
        item.newimg.src = './images/PacMan4.png';
      } else if ((item.newimg.src.includes('PacMan4.png'))) {
        item.newimg.src = './images/PacMan3.png';
      } else {
        item.newimg.src = './images/PacMan1.png';
      }
    }
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  let gameWidth = document.getElementById("game").offsetWidth;
  let gameHeight = document.getElementById("game").offsetHeight;

  if (
    item.position.x + item.newimg.width + item.velocity.x > gameWidth ||
    item.position.x < 0
  ) {
    item.velocity.x = -item.velocity.x;
     item.newimg.src = item.velocity.x > 0 ? './images/PacMan1.png' : './images/PacMan3.png';
  }

  if (
    item.position.y + item.newimg.height + item.velocity.y > gameHeight ||
    item.position.y < 0
  ) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = { checkCollisions, update, pacMen };
}
