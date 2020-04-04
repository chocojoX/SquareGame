class Square {
  constructor(size, position, direction, initial_speed = 0.1, color = "#f00") {
    this.size = size;
    // position is a tuple indicating the position of the
    //top left corner of the square
    this.position = position;
    // direction is a float indicating the direction of
    // deplacement of the square (angle)
    this.direction = direction;
    this.speed = {x:initial_speed*Math.cos(direction),
                  y:initial_speed*Math.cos(direction) };
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position[0], this.position[1], this.size, this.size);
  }

  move(game_height, game_width, delta_t) {
    let drow = this.speed.x * delta_t;
    let dcol = this.speed.y * delta_t;

    this.position[0] += drow;
    this.position[1] += dcol;

    this.apply_collision(game_height, game_width)
  }

  apply_collision(game_height, game_width) {
    let position = this.position
    let size = this.size
    if (position[0]<0){
        position[0] = 0;
        this.speed.x = -this.speed.x
    }
    if (position[1]<0){
        position[1] = 0;
        this.speed.y = -this.speed.y
    }
    if (position[0] + size > game_width){
        this.position[0] = game_width - size;
        this.speed.x = -this.speed.x
    }
    if (position[1] + size > game_height){
        this.position[1] = game_height - size;
        this.speed.y = -this.speed.y
    }
    return false;
  }
}

export default Square;
