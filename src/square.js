class Square {
  constructor(size, position, direction, initial_speed = 1, color = "#f00") {
    this.size = size;
    // position is a tuple indicating the position of the
    //top left corner of the square
    this.position = position;
    // direction is a float indicating the direction of
    // deplacement of the square (angle)
    this.direction = direction;
    this.speed = initial_speed;
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position[0], this.position[1], this.size, this.size);
  }

  move(game_height, game_width) {
    let drow = this.speed * Math.cos(this.direction);
    let dcol = this.speed * Math.sin(this.direction);

    this.position[0] += drow;
    this.position[1] += dcol;

    if (this.check_collision(game_height, game_width)) {
    }
  }

  check_collision(game_height, game_width) {
    //TODO
    return false;
  }
}

export default Square;
