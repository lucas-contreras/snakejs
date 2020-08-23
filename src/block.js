const BLOCK_DEFAULTS = {
	POSITION: { x: 0, y: 0 },
	SIZE: { h: 10, w: 10 },
};

export default class Block {
	constructor(props = {}) {
		this.position = props.position || BLOCK_DEFAULTS.POSITION;
		this.size = props.size || BLOCK_DEFAULTS.SIZE;
		this.speed = 5;
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

	// TODO: improve this method's name
	getFullCoordinates() {
		const { x, y } = this.getPosition();
		const { h, w } = this.getSize();

		return { x1: x, x2: x + w, y1: y, y2: y + h };
	}

	draw() {
		throw new Error('Should implement in children');
	}

	update() {
		this.draw();
	}
}
