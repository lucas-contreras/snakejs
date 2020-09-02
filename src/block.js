import { STAGE_SIZE } from './contansts';

export const BLOCK_DEFAULT_POSITION = {
	x: 0,
	y: 0,
};

export const BLOCK_DIRECTION = {
	UP: 'UP',
	RIGHT: 'RIGHT',
	DOWN: 'DOWN',
	LEFT: 'LEFT',
};

export const BLOCK_SIZE = {
	h: 30,
	w: 30,
};

export const SPEED_DEFAULT = 5;

export default class Block {
	constructor(props = {}) {
		this.position = props.position || BLOCK_DEFAULT_POSITION;
		this.direction = props.direction || BLOCK_DIRECTION.RIGHT;
		this.size = props.size || BLOCK_SIZE;
		this.canvasId = props.canvasId;
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

	getCanvas() {
		return document.getElementById(this.canvasId);
	}

	getContext2d() {
		return this.getCanvas().getContext('2d');
	}

	getCoordinates() {
		const { x, y } = this.getPosition();
		const { h, w } = this.getSize();

		return { x1: x, x2: x + w, y1: y, y2: y + h };
	}

	/* Setters */
	setPosition(x, y) {
		this.position = { x, y };
	}

	setDirection(direction) {
		if (this.validateDirection(direction)) {
			this.direction = direction;
		}
	}

	setSize(h, w) {
		this.size = { h, w };
	}

	validateDirection(direction) {
		if (this.getDirection() === BLOCK_DIRECTION.RIGHT) {
			if (direction === BLOCK_DIRECTION.LEFT) {
				return false;
			}
		}

		if (this.getDirection() === BLOCK_DIRECTION.LEFT) {
			if (direction === BLOCK_DIRECTION.RIGHT) {
				return false;
			}
		}

		if (this.getDirection() === BLOCK_DIRECTION.UP) {
			if (direction === BLOCK_DIRECTION.DOWN) {
				return false;
			}
		}

		if (this.getDirection() === BLOCK_DIRECTION.DOWN) {
			if (direction === BLOCK_DIRECTION.UP) {
				return false;
			}
		}

		return true;
	}

	calculatePosition({ position, size } = {}) {
		position = position || this.getPosition();
		size = size || this.getSize();

		switch (this.getDirection()) {
			case BLOCK_DIRECTION.UP: {
				let posY = position.y - SPEED_DEFAULT;

				if (posY + size.h < 0) {
					posY = STAGE_SIZE.h;
				}

				return { posX: position.x, posY };
			}
			case BLOCK_DIRECTION.RIGHT: {
				let posX = position.x + SPEED_DEFAULT;

				if (posX > STAGE_SIZE.w) {
					posX = -size.w;
				}

				return { posX, posY: position.y };
			}
			case BLOCK_DIRECTION.DOWN: {
				let posY = position.y + SPEED_DEFAULT;

				if (posY > STAGE_SIZE.h) {
					posY = -size.h;
				}

				return { posX: position.x, posY };
			}
			case BLOCK_DIRECTION.LEFT: {
				let posX = position.x - SPEED_DEFAULT;

				if (posX + size.w < 0) {
					posX = STAGE_SIZE.w;
				}

				return { posX, posY: position.y };
			}
			default: {
				throw new Error('Direction was not specified');
			}
		}
	}

	clone() {
		return Object.assign({}, this);
	}

	draw() {
		throw new Error('Should implement in children');
	}

	update() {
		this.draw();
	}
}
