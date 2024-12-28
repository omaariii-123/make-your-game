import { WIDTH, HEIGHT } from "./constant.js";
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
let mag = function (x, y) {
  return Math.sqrt(x * x + y * y);
};
class Duck {
  constructor(continer) {
    this.container = continer;
    this.x = 0;
    this.y = 0;
    this.dx = getRandomInt(100);
    this.dy = getRandomInt(100);
    let m = mag(this.dx, this.dy);
    this.dx /= m;
    this.dy /= m;
    this.speed = 3;
  }

  addDuck() {
    this.duck = document.createElement("div");
    this.duck.style.backgroundColor = "black";
    this.duck.style.width = "40px";
    this.duck.style.height = "40px";
    this.duck.style.position = "absolute";
    this.container.appendChild(this.duck);

    return this.duck;
  }

  update() {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    if (this.x >= WIDTH - 40 || this.x <= 0) {
      this.dx = this.dx * -1;
    }
    if (this.y >= 210 - 40 || this.y <= 0) {
      this.dy = this.dy * -1;
    }
  }

  render() {
    this.duck.style.transform = `translateX(${this.x}px) translateY(${this.y}px)`;
  }
}

export default Duck;
