import Block from './block';
import { STAGE_SIZE } from './contansts';

export const SNAKE_DIRECTION = {
	UP: 'UP',
	RIGHT: 'RIGHT',
	DOWN: 'DOWN',
	LEFT: 'LEFT',
};

export const SNAKE_DEFAULT_SIZE = {
	h: 30,
	w: 30,
};

export default class Snake extends Block {
	constructor(props = {}, stage) {
		super({
			position: props.position,
			size: props.size || SNAKE_DEFAULT_SIZE,
		});

		this.direction = props.direction || SNAKE_DIRECTION.RIGHT;
		this.quantity = 1;

		this.stage = stage;
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

	hasStage() {
		return !!this.stage;
	}

	draw() {
		if (this.hasStage()) {
			const { x, y } = this.getPosition();
			const { w, h } = this.getSize();

			this.stage.fillRect(x, y, w, h);
		}
	}

	update() {
		const { w: snakeWidth, h: snakeHeigth } = this.getSize();
		const { x, y } = this.getPosition();
		const speed = this.getSpeed();

		switch (this.getDirection()) {
			case SNAKE_DIRECTION.UP: {
				let posY = y - speed;

				if (posY < 0) {
					posY = STAGE_SIZE.h - snakeHeigth;
				}

				this.setPosition(x, posY);
				break;
			}
			case SNAKE_DIRECTION.RIGHT: {
				let posX = x + speed;

				if (posX + snakeWidth > STAGE_SIZE.w) {
					posX = 0;
				}

				this.setPosition(posX, y);
				break;
			}
			case SNAKE_DIRECTION.DOWN: {
				let posY = y + speed;

				if (posY + snakeHeigth > STAGE_SIZE.h) {
					posY = 0;
				}

				this.setPosition(x, posY);
				break;
			}
			case SNAKE_DIRECTION.LEFT: {
				let posX = x - speed;

				if (posX < 0) {
					posX = STAGE_SIZE.w - snakeWidth;
				}

				this.setPosition(posX, y);
				break;
			}
			default: {
				throw new Error('Direction no specified');
			}
		}

		this.draw();
	}

	increase() {
		const quantity = this.getQuantity() + 1;

		this.setQuantity(quantity);
	}
}
