import Block, { BLOCK_DIRECTION } from "./block";

export default class SnakeBody extends Block {
	constructor(props = {}, stage) {
		super(props, stage);

		this.nextPositions = props.nextPositions || [];
	}

	getNextPosition() {
		return this.nextPositions;
	}

	setNextPosition(nextPosition) {
		this.nextPositions.push(nextPosition);
	}

	removeFirstPosition() {
		return this.nextPositions.shift();
	}

	draw() {
		if (this.hasStage()) {
			const { x, y } = this.getPosition();
			const { w, h } = this.getSize();

			this.stage.fillRect(x, y, w, h);
		}
	}

	updatePosition() {
		const position = this.getPosition();

		switch (this.getDirection()) {
			case BLOCK_DIRECTION.UP: {
				this.setPosition(position.x, position.y + this.size.w);
				break;
			}
			case BLOCK_DIRECTION.RIGHT: {
				this.setPosition(position.x - this.size.h, position.y);
				break;
			}
			case BLOCK_DIRECTION.DOWN: {
				this.setPosition(position.x, position.y - this.size.w);
				break;
			}
			case BLOCK_DIRECTION.LEFT: {
				this.setPosition(position.x + this.size.h, position.y);
				break;
			}
			default: {
				throw new Error("Direction no specified");
			}
		}
	}

	update() {
		const position = this.getPosition();
		const nextMove = this.getNextPosition()[0];

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
