import { STAGE_SIZE } from "./contansts";

export const BLOCK_DEFAULT_POSITION = {
	x: 0,
	y: 0,
};

export const BLOCK_DIRECTION = {
	UP: "UP",
	RIGHT: "RIGHT",
	DOWN: "DOWN",
	LEFT: "LEFT",
};

export const BLOCK_SIZE = {
	h: 30,
	w: 30,
};

const SPEED_DEFAULT = 2;

export default class Block {
	constructor(props = {}, stage) {
		this.position = props.position || BLOCK_DEFAULT_POSITION;
		this.direction = props.direction || BLOCK_DIRECTION.RIGHT;
		this.size = props.size || BLOCK_SIZE;
		this.stage = stage;
	}

	/* Getters */
	getPosition() {
		return this.position;
	}

	getDirection() {
		return this.direction;
	}

	getSize() {
		return this.size;
	}

	getCoordinates() {
		const { x, y } = this.getPosition();
		const { h, w } = this.getSize();

		return { x1: x, x2: x + w, y1: y, y2: y + h };
	}

	hasStage() {
		return !!this.stage;
	}

	/* Setters */
	setPosition(x, y) {
		this.position = { x, y };
	}

	setDirection(direction) {
		this.direction = direction;
	}

	setSize(h, w) {
		this.size = { h, w };
	}

	calculatePosition() {
		const { position, size } = this;

		switch (this.getDirection()) {
			case BLOCK_DIRECTION.UP: {
				let posY = position.y - SPEED_DEFAULT;

				if (posY < 0) {
					posY = STAGE_SIZE.h - size.h;
				}

				return { posX: position.x, posY };
			}
			case BLOCK_DIRECTION.RIGHT: {
				let posX = position.x + SPEED_DEFAULT;

				if (posX + size.w > STAGE_SIZE.w) {
					posX = 0;
				}

				return { posX, posY: position.y };
			}
			case BLOCK_DIRECTION.DOWN: {
				let posY = position.y + SPEED_DEFAULT;

				if (posY + size.h > STAGE_SIZE.h) {
					posY = 0;
				}

				return { posX: position.x, posY };
			}
			case BLOCK_DIRECTION.LEFT: {
				let posX = position.x - SPEED_DEFAULT;

				if (posX < 0) {
					posX = STAGE_SIZE.w - size.w;
				}

				return { posX, posY: position.y };
			}
			default: {
				throw new Error("Direction no specified");
			}
		}
	}

	draw() {
		throw new Error("Should implement in children");
	}

	update() {
		this.draw();
	}
}
