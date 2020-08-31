import Collision from './src/collision';
import { BLOCK_DIRECTION } from './src/block';
import Snake from './src/snake';
import { SNAKE_KEYS, STAGE_SIZE, SNAKE_DEFAULT_SIZE } from './src/contansts';
import Food from './src/food';

window.onload = function () {
	const canvas = document.getElementById('stage');
	const stage = canvas.getContext('2d');

	const snake = new Snake({ canvasId: 'stage' });
	const food = new Food({ canvasId: 'stage' });

	canvas.addEventListener('keypress', function (e) {
		switch (e.keyCode) {
			case SNAKE_KEYS.W: {
				snake.setDirection(BLOCK_DIRECTION.UP);
				break;
			}
			case SNAKE_KEYS.D: {
				snake.setDirection(BLOCK_DIRECTION.RIGHT);
				break;
			}
			case SNAKE_KEYS.S: {
				snake.setDirection(BLOCK_DIRECTION.DOWN);
				break;
			}
			case SNAKE_KEYS.A: {
				snake.setDirection(BLOCK_DIRECTION.LEFT);
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
			snake.increaseSize();
			food.resetCreationNewFood();
		}
	};

	animate();
};
