import { BLOCK_DIRECTION } from './src/block';
import Snake from './src/snake';
import { SNAKE_KEYS, STAGE_SIZE } from './src/contansts';
import Food from './src/food';

window.onload = function () {
	const canvas = document.getElementById('stage');
	const stage = canvas.getContext('2d');

	const snake = new Snake({ canvasId: 'stage' });
	const food = new Food({ canvasId: 'stage' });
	snake.init();

	canvas.addEventListener('keypress', function (e) {
		switch (e.keyCode) {
			case SNAKE_KEYS.W: {
				snake.setHeadDirection(BLOCK_DIRECTION.UP);
				break;
			}
			case SNAKE_KEYS.D: {
				snake.setHeadDirection(BLOCK_DIRECTION.RIGHT);
				break;
			}
			case SNAKE_KEYS.S: {
				snake.setHeadDirection(BLOCK_DIRECTION.DOWN);
				break;
			}
			case SNAKE_KEYS.A: {
				snake.setHeadDirection(BLOCK_DIRECTION.LEFT);
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

		snake.increase(food);
	};

	animate();
};
