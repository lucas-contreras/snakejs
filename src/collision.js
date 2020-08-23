import Block from './block';

export default class Collision {
	static hasRectCollision(rect1, rect2) {
		const cord1 = rect1.getFullCoordinates();
		const cord2 = rect2.getFullCoordinates();

		return (
			cord1.x1 < cord2.x2 &&
			cord1.x2 > cord2.x1 &&
			cord1.y1 < cord2.y2 &&
			cord1.y2 > cord2.y1
		);
	}
}
