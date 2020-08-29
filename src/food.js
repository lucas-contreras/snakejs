import Block from "./block";
import { STAGE_SIZE } from "./contansts";

export const FOOD_DEFAULT_POSITION = {
	x: 0,
	y: 0,
};

export const FOOD_DEFAULT_SIZE = {
	w: 20,
	h: 20,
};

export default class Food extends Block {
	constructor(props = {}, stage) {
		super({
			position: props.position || FOOD_DEFAULT_POSITION,
			size: props.size || FOOD_DEFAULT_SIZE,
		});

		this.createNewFood = true;
		this.stage = stage;
	}

	getCreateNewFood() {
		return this.createNewFood;
	}

	setCreateNewFood(create) {
		this.createNewFood = create;
	}

	resetCreationNewFood() {
		this.setCreateNewFood(true);
	}

	draw() {
		if (this.hasStage()) {
			const { x, y } = this.getPosition();
			const { w, h } = this.getSize();

			this.stage.fillRect(x, y, w, h);
		}
	}

	update() {
		if (this.getCreateNewFood()) {
			const { h, w } = this.getSize();
			const posX = Math.floor(Math.random() * STAGE_SIZE.h) - w;
			const posY = Math.floor(Math.random() * STAGE_SIZE.w) - h;

			this.setPosition(posX, posY);
			this.setCreateNewFood(false);
		}

		this.draw();
	}
}
