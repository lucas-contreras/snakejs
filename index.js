import Collision from './src/collision';
import Snake, { SNAKE_DIRECTION } from './src/snake';
import { SNAKE_KEYS, STAGE_SIZE } from './src/contansts';
import Food from './src/food';

window.onload = function () {
	const canvas = document.getElementById('stage');
	const stage = canvas.getContext('2d');

	const snake = new Snake({}, stage);
	const food = new Food({}, stage);

	canvas.addEventListener('keypress', function (e) {
		switch (e.keyCode) {
			case SNAKE_KEYS.W: {
				snake.setDirection(SNAKE_DIRECTION.UP);
				break;
			}
			case SNAKE_KEYS.D: {
				snake.setDirection(SNAKE_DIRECTION.RIGHT);
				break;
			}
			case SNAKE_KEYS.S: {
				snake.setDirection(SNAKE_DIRECTION.DOWN);
				break;
			}
			case SNAKE_KEYS.A: {
				snake.setDirection(SNAKE_DIRECTION.LEFT);
				break;
			}
			default: {
				return;
			}
		}
	});

	const animate = function () {
		window.requestAnimationFrame(animate);

		stage.clearRect(0, 0, STAGE_SIZE.w, STAGE_SIZE.h);
		snake.update();
		food.update();

		const wasEaten = Collision.hasRectCollision(snake, food);

		if (wasEaten) {
			snake.increase();
			food.resetCreationNewFood();
		}
	};

	animate();
};
