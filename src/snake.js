import SnakeBody from './snakeBody';
import Block, { BLOCK_DIRECTION } from './block';

export const SNAKE_DEFAULT_SIZE = {
	h: 30,
	w: 30,
};

export default class Snake extends Block {
	constructor(props = {}, stage) {
		super({ ...props, size: props.size || SNAKE_DEFAULT_SIZE }, stage);

		this.quantity = 0;
		this.snakeBody = [];
		this.locationHistory = [{ x: 0, y: 0, direction: BLOCK_DIRECTION.RIGHT }];
	}

	setDirection(direction) {
		this.direction = direction;

		// if (this.getQuantity()) {
		// 	this.locationHistory.push({
		// 		...this.getPosition(),
		// 		direction,
		// 	});

		// 	console.log(this.locationHistory);
		// }
	}

	getQuantity() {
		return this.snakeBody.length;
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

		// this.snakeBody.forEach((body, index, self) => {
		// 	/* first element must be taken from head position */
		// 	if (index > 0) {
		// 		const prevBody = self[index - 1];
		// 		const prevPosition = prevBody.calculatePosition(true);

		// 		body.setPosition(prevPosition.posX, prevPosition.posY);
		// 	}
		// });

		// if (this.getQuantity()) {
		// 	const body = this.snakeBody[0];
		// 	const newBodyPosition = this.calculatePosition(true);

		// 	body.setDirection(this.getDirection());
		// 	body.setPosition(newBodyPosition.posX, newBodyPosition.posY);
		// }

		this.setPosition(newPosition.posX, newPosition.posY);
		this.draw();
	}

	increaseSize() {
		const body = {
			position: { ...this.getPosition() },
			direction: this.getDirection(),
			size: { ...this.getSize() },
		};

		this.snakeBody.push(new SnakeBody(body, this.stage));

		console.log(this.snakeBody);
	}
}
