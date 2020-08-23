import Collision from "./src/collision";
import Snake from "./src/snake";
import {
  SNAKE_KEYS,
  SNAKE_DIRECTION,
  SNAKE_DEFAULT_SIZE,
  FOOD_DEFAULT_SIZE,
  STAGE_SIZE,
} from "./src/contansts";
import Food from "./src/food";

window.onload = function () {
  const canvas = document.getElementById("stage");
  const stage = canvas.getContext("2d");

  const snake = new Snake({}, stage);
  const food = new Food({}, stage);

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

    // const init = () => {
    //   snake.move();
    //   food.createFood();

    //   const eaten = Collision.isCollided(snake, food);

    //   if (eaten) {
    //     snake.increase();
    //     food.resetMakingFood();
    //     food.createFood();
    //   }

    //   const { x: snakePosX, y: snakePosY } = snake.getPosition();
    //   const { x: foodPosX, y: foodPosY } = food.getPosition();

    //   stage.clearRect(0, 0, 420, 420);
    //   stage.fillRect(
    //     snakePosX,
    //     snakePosY,
    //     SNAKE_DEFAULT_SIZE.w,
    //     SNAKE_DEFAULT_SIZE.h
    //   );

    //   stage.fillRect(
    //     foodPosX,
    //     foodPosY,
    //     FOOD_DEFAULT_SIZE.w,
    //     FOOD_DEFAULT_SIZE.h
    //   );

    //   window.requestAnimationFrame(init);
    // };

    // init();
  });

  const animate = function () {
    window.requestAnimationFrame(animate);

    stage.clearRect(0, 0, STAGE_SIZE.w, STAGE_SIZE.h);
    snake.update();
    food.update();

    // console.log("hola");
  };

  animate();
};
