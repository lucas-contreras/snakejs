import Collision from './collision';
import Block from './block';

export default class SnakeHead extends Block {
	constructor(props = {}) {
		super(props);
	}

	getCurrentPositionAndDirection() {
		return {
			...Object.assign({}, this.getPosition()),
			direction: this.getDirection(),
		};
	}

	eatFood(food) {
		return Collision.hasRectCollision(this, food);
	}

	draw() {
		const { x, y } = this.getPosition();
		const { w, h } = this.getSize();

		this.getContext2d().fillRect(x, y, w, h);
	}

	update() {
		const { posX, posY } = this.calculatePosition();
		this.setPosition(posX, posY);
		this.draw();
	}
}
