import { STAGE_SIZE } from "./contansts";

const BLOCK_DEFAULTS = {
  POSITION: { x: 0, y: 0 },
  SIZE: { h: 10, y: 10 },
};

export default class Block {
  constructor(props = {}) {
    this.position = props.position || BLOCK_DEFAULTS.POSITION;
    this.size = props.size || BLOCK_DEFAULTS.SIZE;
    this.speed = 1;
  }

  getPosition() {
    return this.position;
  }

  setPosition(x, y) {
    this.position = { x, y };
  }

  getSize() {
    return this.size;
  }

  setSize(h, w) {
    this.size = { h, w };
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  draw() {
    throw new Error("Should implement in children");
  }

  update() {
    this.draw();
  }
}
