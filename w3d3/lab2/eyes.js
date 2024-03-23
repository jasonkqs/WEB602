const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  // Update each ball's position based on mouse movement
  for (const ball of balls) {
    ball.style.left = x;
    ball.style.top = y;
    ball.style.transform = `translate(-${x}, -${y})`;
  }
};
