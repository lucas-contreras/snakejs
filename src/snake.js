// import Body from "./snakeBody";
// import Head from "./snakeHead";
import Block from "./block";
import { SNAKE_DIRECTION, SNAKE_DEFAULT_SIZE, STAGE_SIZE } from "./contansts";

export default class Snake extends Block {
  constructor(props = {}) {
    super({
      position: props.position,
      size: props.size || SNAKE_DEFAULT_SIZE,
    });

    this.direction = props.direction || SNAKE_DIRECTION.RIGHT;
    this.quantity = 1;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(direction) {
    this.direction = direction;
  }

  getQuantity() {
    return this.quantity;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  move() {
    const { w: snakeWidth, h: snakeHeigth } = this.getSize();
    const { x, y } = this.getPosition();

    switch (this.getDirection()) {
      case SNAKE_DIRECTION.UP: {
        let posY = y - snakeHeigth;

        if (posY < 0) {
          posY = STAGE_SIZE.h - snakeWidth;
        }

        this.setPosition(x, posY);
        break;
      }
      case SNAKE_DIRECTION.RIGHT: {
        let posX = x + snakeWidth;

        if (posX + snakeWidth > STAGE_SIZE.w) {
          posX = 0;
        }

        this.setPosition(posX, y);
        break;
      }
      case SNAKE_DIRECTION.DOWN: {
        let posY = y + snakeHeigth;

        if (posY + snakeWidth > STAGE_SIZE.h) {
          posY = 0;
        }

        this.setPosition(x, posY);
        break;
      }
      case SNAKE_DIRECTION.LEFT: {
        let posX = x - snakeWidth;

        if (posX < 0) {
          posX = STAGE_SIZE.w - snakeWidth;
        }

        this.setPosition(posX, y);
        break;
      }
    }
  }

  increase() {
    const quantity = this.getQuantity() + 1;

    this.setQuantity(quantity);
    console.log("i'm bigger ", this.getQuantity());
  }
}
