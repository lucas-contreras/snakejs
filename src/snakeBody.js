import Block from "./block";

export default class SnakeBody extends Block {
  constructor(props = {}) {
    super({
      position: props.position,
      size: props.size || SNAKE_DEFAULT_SIZE,
    });
  }
}
