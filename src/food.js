import Block from "./block";
import { FOOD_POSITION, FOOD_DEFAULT_SIZE, STAGE_SIZE } from "./contansts";

export default class Food extends Block {
  constructor(props = {}) {
    super({
      position: props.position || FOOD_POSITION,
      size: props.size || FOOD_DEFAULT_SIZE,
    });

    this.makeFood = false;
  }

  getMakeFood() {
    return this.makeFood;
  }

  setMakeFood(create) {
    this.makeFood = create;
  }

  resetMakingFood() {
    this.setMakeFood(false);
  }

  createFood() {
    if (this.getMakeFood()) return;
    const posX = Math.floor(Math.random() * STAGE_SIZE.h);
    const posY = Math.floor(Math.random() * STAGE_SIZE.w);

    this.setPosition(posX, posY);
    this.setMakeFood(true);
  }
}
