// import Body from "./snakeBody";
// import Head from "./snakeHead";

export const SNAKE_DIRECTION = {
  UP: "UP",
  RIGHT: "RIGHT",
  DOWN: "DOWN",
  LEFT: "LEFT",
};

export default class Snake {
  constructor(direction) {
    this.direction = direction || SNAKE_DIRECTION.RIGHT;
    this.position = [0, 0];
  }

  getDirection() {
    console.log(this.direction);
    return this.direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  move() {
    console.log("i'm moving and my is direction", this.getDirection());
  }

  increaseSize() {
    console.log("i'm bigger");
  }
}
