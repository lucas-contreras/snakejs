import Snake, { SNAKE_DIRECTION } from "./src/snake";
import { SNAKE_KEYS } from "./src/contansts";

const snake = new Snake();

snake.getDirection();
snake.move();

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
        snake.setDirection(SNAKE_DIRECTION.LEFT);
      }

      if (ev.keyCode === SNAKE_KEYS.S) {
        snake.setDirection(SNAKE_DIRECTION.DOWN);
      }

      if (ev.keyCode === SNAKE_KEYS.A) {
        snake.setDirection(SNAKE_DIRECTION.RIGHT);
      }

      if (ev.keyCode === SNAKE_KEYS.W) {
        snake.setDirection(SNAKE_DIRECTION.UP);
      }

      snake.getDirection();
    });
  }
};
