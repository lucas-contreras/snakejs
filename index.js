import Collision from "./src/collision";
import Snake from "./src/snake";
import {
  SNAKE_KEYS,
  SNAKE_DIRECTION,
  SNAKE_DEFAULT_SIZE,
} from "./src/contansts";
import Food from "./src/food";

window.onload = function () {
  const snake = new Snake();
  const food = new Food();

  const canvas = document.getElementById("stage");
  const stage = canvas.getContext("2d");

  canvas.addEventListener("keypress", function (e) {
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

    snake.move();
    food.createFood();

    const eaten = Collision.isCollided(snake, food);

    if (eaten) {
      snake.increase();
      food.resetMakingFood();
      food.createFood();
    }

    const { x: snakePosX, y: snakePosY } = snake.getPosition();
    const { x: foodPosX, y: foodPosY } = food.getPosition();

    stage.clearRect(0, 0, 420, 420);
    stage.fillRect(
      snakePosX,
      snakePosY,
      SNAKE_DEFAULT_SIZE.w,
      SNAKE_DEFAULT_SIZE.h
    );

    stage.fillRect(foodPosX, foodPosY, 15, 15);
  });
};
