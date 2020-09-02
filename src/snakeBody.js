import Block, { BLOCK_DIRECTION, SPEED_DEFAULT } from './block';

export default class SnakeBody extends Block {
	constructor(props = {}) {
		super(props);

		this.nextPositions = props.nextPositions || [];
		this.order = props.order;
	}

	/* Getters */
	getNextPosition() {
		return this.nextPositions[0];
	}

	getOrder() {
		return this.order;
	}

	setNextPosition(nextPosition) {
		this.nextPositions.push(nextPosition);
	}

	setInitialPosition() {
		const position = Object.assign({}, this.getPosition());

		switch (this.getDirection()) {
			case BLOCK_DIRECTION.UP: {
				position.y = position.y + this.size.h * this.getOrder() + SPEED_DEFAULT;
				break;
			}
			case BLOCK_DIRECTION.RIGHT: {
				position.x = position.x - this.size.w * this.getOrder() - SPEED_DEFAULT;
				break;
			}
			case BLOCK_DIRECTION.DOWN: {
				position.y = position.y - this.size.h * this.getOrder() - SPEED_DEFAULT;
				break;
			}
			case BLOCK_DIRECTION.LEFT: {
				position.x = position.x + this.size.w * this.getOrder() + SPEED_DEFAULT;
				break;
			}
		}

		const { posX, posY } = this.calculatePosition({ position });
		this.setPosition(posX, posY);
	}

	removeFirstPosition() {
		return this.nextPositions.shift();
	}

	draw() {
		const { x, y } = this.getPosition();
		const { w, h } = this.getSize();

		this.getContext2d().fillRect(x, y, w, h);
	}

	update() {
		const position = this.getPosition();
		const nextMove = this.getNextPosition();

		if (nextMove) {
			if (position.x === nextMove.x && position.y === nextMove.y) {
				this.setDirection(nextMove.direction);
				this.removeFirstPosition();
			}
		}

		const { posX, posY } = this.calculatePosition();
		this.setPosition(posX, posY);

		this.draw();
	}
}
