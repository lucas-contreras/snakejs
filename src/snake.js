import Block, { BLOCK_DIRECTION } from "./block";
import SnakeBody from "./snakeBody";

export default class Snake extends Block {
	constructor(props = {}, stage) {
		super(props, stage);

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

	setDirection(direction) {
		this.direction = direction;

		if (this.getQuantity()) {
			this.snakeBody.forEach((body) => {
				body.setNextPosition({ ...this.getPosition(), direction });
			});

			console.log(this.snakeBody);
		}
	}

	draw() {
		if (this.hasStage()) {
			const { x, y } = this.getPosition();
			const { w, h } = this.getSize();

			// head snake
			this.stage.fillRect(x, y, w, h);

			this.snakeBody.forEach((body) => {
				body.update();
			});
		}
	}

	update() {
		const newPosition = this.calculatePosition();
		this.setPosition(newPosition.posX, newPosition.posY);

		this.draw();
	}

	increaseSize() {
		const bodyProps = {
			position: { ...this.getPosition() },
			direction: this.getDirection(),
		};

		if (this.getQuantity()) {
			const lastBody = this.snakeBody[this.getQuantity() - 1];
			bodyProps.position = { ...lastBody.getPosition() };
		}

		const body = new SnakeBody(bodyProps, this.stage);
		body.updatePosition();

		this.snakeBody.push(body);
	}
}
