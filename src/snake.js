import Block, { BLOCK_DIRECTION } from './block';
import SnakeBody from './snakeBody';

export default class Snake extends Block {
	constructor(props = {}) {
		super(props);

		this.quantity = 0;
		this.snakeBody = [];
		this.prevMovement = [];
	}

	getPrevMovement() {
		return this.prevMovement;
	}

	getQuantity() {
		return this.snakeBody.length;
	}

	getLastBlock() {
		return this.snakeBody[this.getQuantity() - 1];
	}

	setDirection(direction) {
		this.direction = direction;

		this.snakeBody.forEach((body, index) => {
			body.setNextPosition({ ...this.getPosition(), direction });
		});
	}

	draw() {
		const { x, y } = this.getPosition();
		const { w, h } = this.getSize();

		// head snake
		this.getContext2d().fillRect(x, y, w, h);

		this.snakeBody.forEach((body) => {
			body.update();
		});
	}

	update() {
		const { posX, posY } = this.calculatePosition();
		this.setPosition(posX, posY);

		this.draw();
	}

	increaseSize() {
		const body = new SnakeBody(this.clone());

		body.updatePosition(this.getQuantity() + 1);
		this.snakeBody.push(body);
	}
}
