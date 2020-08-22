import Block from "./block";

export default class Collision {
  static isCollided(block1, block2) {
    const { h: b1H, w: b1W } = block1.getSize();
    const { x: b1X1, y: b1Y1 } = block1.getPosition();
    const [b1X2, b1Y2] = [b1X1 + b1W, b1Y1 + b1H];

    const { h: b2H, w: b2W } = block2.getSize();
    const { x: b2X1, y: b2Y1 } = block2.getPosition();
    const [b2X2, b2Y2] = [b2X1 + b2W, b2Y1 + b2H];

    const condA = b1X1 <= b2X1 && b1X2 >= b2X1;
    const condB = b1X1 <= b2X2 && b1X2 >= b2X2;
    const condC = b1Y1 <= b2Y1 && b1Y2 >= b2Y1;
    const condD = b1Y1 <= b2Y2 && b1Y2 >= b2Y2;

    const final = (condA || condB) && (condC || condD);

    return final;
  }
}
