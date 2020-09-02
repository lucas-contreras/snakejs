import Block from './block';
import { STAGE_SIZE } from './contansts';

export const FOOD_DEFAULT_POSITION = {
	x: 0,
	y: 0,
};

export const FOOD_DEFAULT_SIZE = {
	w: 20,
	h: 20,
};

export default class Food extends Block {
	constructor(props = {}) {
		super({
			...props,
			position: props.position || FOOD_DEFAULT_POSITION,
			size: props.size || FOOD_DEFAULT_SIZE,
		});

		this.isNewFood = true;
	}

	getIsNewFood() {
		return this.isNewFood;
	}

	setIsNewFood(isNew) {
		this.isNewFood = isNew;
	}

	draw() {
		const { x, y } = this.getPosition();
		const { w, h } = this.getSize();

		this.getContext2d().fillRect(x, y, w, h);
	}

	update() {
		if (this.getIsNewFood()) {
			const posX = Math.floor(Math.random() * STAGE_SIZE.h);
			const posY = Math.floor(Math.random() * STAGE_SIZE.w);

			this.setPosition(posX, posY);
			this.setIsNewFood(false);
		}

		this.draw();
	}
}
