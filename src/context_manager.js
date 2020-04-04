import Square from "./square.js";

function createRandomSquare(game_width, game_height) {
  let size = Math.floor(25 + 75 * Math.random());

  let position_col = (game_width - size) * Math.random();
  let position_row = (game_height - size) * Math.random();
  let position = [position_col, position_row];

  let angle = 2 * Math.PI * Math.random();

  let square = new Square(size, position, angle);

  return square;
}

class ContextManager {
  constructor(n_enemies, GAME_WIDTH, GAME_HEIGHT, ctx) {
    this.ctx = ctx;
    this.height = GAME_HEIGHT;
    this.width = GAME_WIDTH;
    this.n_enemies = n_enemies;
    this.enemies = [];
    for (let i = 0; i < n_enemies; i++) {
      this.enemies.push(createRandomSquare(GAME_WIDTH, GAME_HEIGHT));
    }
    console.log("hello");
  }

  draw() {
    let ctx = this.ctx;
    this.enemies.forEach(function(enemy) {
      enemy.draw(ctx);
    });
  }

  update(delta_t) {
    let height = this.height;
    let width = this.width;
    this.enemies.forEach(function(en) {
      en.move(height, width, delta_t);
    });
  }
}

export default ContextManager;
