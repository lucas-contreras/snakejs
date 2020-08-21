import Snake from "./src/snake";
import { SNAKE_KEYS, SNAKE_DIRECTION } from "./src/contansts";

const snake = new Snake();

// snake.getCurrentDirection();
// snake.move();

window.onload = function () {
  const div = document.getElementById("some");

  if (div) {
    div.style.cursor = "pointer";
    div.addEventListener("click", function (ev) {
      alert("hello from lala");
    });

    div.addEventListener("keypress", function (ev) {
      // console.log(ev.keyCode, ev.key, ev.altKey);
      if (ev.keyCode === SNAKE_KEYS.D) {
        snake.setCurrentDirection(SNAKE_DIRECTION.LEFT);
      }

      if (ev.keyCode === SNAKE_KEYS.S) {
        snake.setCurrentDirection(SNAKE_DIRECTION.DOWN);
      }

      if (ev.keyCode === SNAKE_KEYS.A) {
        snake.setCurrentDirection(SNAKE_DIRECTION.RIGHT);
      }

      if (ev.keyCode === SNAKE_KEYS.W) {
        snake.setCurrentDirection(SNAKE_DIRECTION.UP);
      }

      snake.getCurrentDirection();
    });
  }

  const canvas = document.getElementById("stage");
  const stage = canvas.getContext("2d");

  canvas.addEventListener("mousemove", function (e) {
    // const { x, y } = e;

    // console.log(e);

    const x = e.offsetX || e.layerX;
    const y = e.offsetY || e.layerY;

    // stage.fillRect(x, y, 20, 20);
  });

  canvas.addEventListener("keypress", function (e) {
    // const { x, y } = e;

    // console.log(e);

    // const x = e.offsetX || e.layerX;
    // const y = e.offsetY || e.layerY;

    // stage.fillRect(x, y, 20, 20);

    switch (e.keyCode) {
      case SNAKE_KEYS.W: {
        snake.setCurrentDirection(SNAKE_DIRECTION.UP);
        break;
      }
      case SNAKE_KEYS.D: {
        snake.setCurrentDirection(SNAKE_DIRECTION.RIGHT);
        break;
      }
      case SNAKE_KEYS.S: {
        snake.setCurrentDirection(SNAKE_DIRECTION.DOWN);
        break;
      }
      case SNAKE_KEYS.A: {
        snake.setCurrentDirection(SNAKE_DIRECTION.LEFT);
        break;
      }
      default: {
        break;
      }
    }

    snake.move();
    const { x, y } = snake.getHeadPosition();

    stage.fillRect(x, y, 20, 20);
  });
};
