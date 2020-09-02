import SnakeBody from './snakeBody';
import SnakeHead from './snakeHead';

export default class Snake {
	constructor(props = {}) {
		this.canvasId = props.canvasId;
		this.body = [];
	}

	/* Set all properties of snake */
	init() {
		this.createHead();
	}

	getHead() {
		return this.head;
	}

	setHeadDirection(direction) {
		this.head.setDirection(direction);

		this.notify(this.head.getCurrentPositionAndDirection());
	}

	addBody(body) {
		this.body.push(body);
	}

	removeBody(body) {
		const found = this.body.findIndex((b) => b === body);
		if (body > -1) {
			this.body.splice(found, 1);
		}
	}

	notify(data) {
		this.body.forEach((b) => {
			b.setNextPosition(data);
		});
	}

	createHead() {
		if (!this.head) {
			this.head = new SnakeHead({ canvasId: this.canvasId });
		}

		return this.getHead();
	}

	createBody() {
		if (this.head) {
			const body = new SnakeBody({
				...this.head.clone(),
				order: this.body.length + 1,
			});

			body.setInitialPosition();
			return body;
		}

		return undefined;
	}

	increase(food) {
		if (!this.head) {
			throw new Error("Head wasn't created yet");
		}

		if (this.head.eatFood(food)) {
			food.setIsNewFood(true);

			const body = this.createBody();
			this.addBody(body);
		}
	}

	update() {
		this.head.update();
		this.body.forEach((b) => b.update());
	}
}
