import Block from './block';

export default class SnakeBody extends Block {
	constructor(props = {}, stage) {
		super({ ...props }, stage);

		this.locationHistory = props.locationHistory || [];
	}

	draw() {
		if (this.hasStage()) {
			const { x, y } = this.getPosition();
			const { w, h } = this.getSize();

			this.stage.fillRect(x, y, w, h);
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
}
