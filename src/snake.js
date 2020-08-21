// import Body from "./snakeBody";
// import Head from "./snakeHead";
import { SNAKE_DIRECTION, SNAKE_DEFAULT_SIZE } from "./contansts";

export default class Snake {
  constructor(props = {}) {
    this.currentDirection = props.direction || SNAKE_DIRECTION.RIGHT;
    this.headPosition = {
      x: 0,
      y: 0,
    };
    this.size = props.size || SNAKE_DEFAULT_SIZE;
  }

  getCurrentDirection() {
    console.log(this.currentDirection);
    return this.currentDirection;
  }

  setCurrentDirection(direction) {
    this.currentDirection = direction;
  }

  getHeadPosition() {
    return this.headPosition;
  }

  setHeadPosition(x, y) {
    this.headPosition = { x, y };
  }

  getSize() {
    return this.size;
  }

  setSize(heigth, width) {
    this.size = {
      heigth,
      width,
    };
  }

  move() {
    switch (this.getCurrentDirection()) {
      case SNAKE_DIRECTION.UP: {
        const y = Math.abs(this.getHeadPosition().y - this.getSize().heigth);
        this.setHeadPosition(this.getHeadPosition().x, y);
        break;
      }
      case SNAKE_DIRECTION.RIGHT: {
        const x = this.getSize().width + this.getHeadPosition().x;
        this.setHeadPosition(x, this.getHeadPosition().y);
        break;
      }
      case SNAKE_DIRECTION.DOWN: {
        const y = this.getSize().heigth + this.getHeadPosition().y;
        this.setHeadPosition(this.getHeadPosition().x, y);
        break;
      }
      case SNAKE_DIRECTION.LEFT: {
        const x = Math.abs(this.getHeadPosition().x - this.getSize().width);
        this.setHeadPosition(x, this.getHeadPosition().y);
        break;
      }
    }

    console.log(this.getHeadPosition());
  }

  increaseSize() {
    console.log("i'm bigger");
  }
}
