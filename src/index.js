import ContextManager from "./context_manager.js";
// import "./styles.css";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

/*
ctx.fillStyle = "#00f";
ctx.fillRect(400, 300, 100, 100);

ctx.fillStyle = "#f00";
ctx.fillRect(100, 50, 80, 80);*/

let n_enemies = 4;
let ctx_manager = new ContextManager(n_enemies, GAME_WIDTH, GAME_HEIGHT, ctx);

ctx_manager.draw();

/*let d = new Date();
for (let i = 0; i < 10; i++) {
  let t0 = d.getTime();
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx_manager.update();
  ctx_manager.draw();
}*/

let lastTime = 0;

function gameLoop(timestamp) {
  let delta_t = (timestamp - lastTime);
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx_manager.update(delta_t);
  ctx_manager.draw();

  requestAnimationFrame(gameLoop);
}

gameLoop(0);
