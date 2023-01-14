import { CanvasWeather } from "./BackgroundModel";

export class SnowBg extends CanvasWeather {
  constructor(canvas) {
    super(canvas);
  }
  #random(min, max) {
    return min + Math.random() * (max - min + 1);
  }
  #snowInit() {
    for (let i = 0; i < 200; i++) {
      this.particles.push({
        pX: Math.round(Math.random() * this.canvas.width),
        pY: Math.round(Math.random() * this.canvas.height),
        opacity: Math.random(),
        speedX: this.#random(-5, 5),
        speedY: this.#random(1, 5),
        radius: this.#random(0.5, 4),
      });
    }
  }
  #drawSnow() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((elem) => {
      const gradient = this.context.createRadialGradient(
        elem.pX,
        elem.pY,
        0,
        elem.pX,
        elem.pY,
        elem.radius
      );
      gradient.addColorStop(0, `rgba(255,255,255,${elem.opacity})`);
      gradient.addColorStop(0.8, `rgba(210,236,242,${elem.opacity})`);
      gradient.addColorStop(1, `rgba(237,247,249,${elem.opacity})`);
      this.context.beginPath();
      this.context.arc(elem.pX, elem.pY, elem.radius, 0, Math.PI * 2, false);
      this.context.fillStyle = gradient;
      this.context.fill();
      this.context.closePath();
    });
  }
  #updateSnow() {
    this.particles.forEach((elem) => {
      elem.pX += elem.speedX;
      elem.pY += elem.speedY;
      if (
        elem.pX > this.canvas.width ||
        elem.px < 0 ||
        elem.pY > this.canvas.height
      ) {
        elem.pX = Math.round(Math.random() * this.canvas.width);
        elem.pY = 0;
        elem.speedX = this.#random(-5, 5);
        elem.speedY = this.#random(1, 5);
      }
    });
  }

  snowAnimate() {
    this.#drawSnow();
    this.#updateSnow();
    console.log("snow");
    this.animationFrame = requestAnimationFrame(() => this.snowAnimate());
  }
  #init() {
    this.canvasInit();
    this.#snowInit();
    this.snowAnimate();
  }
  start() {
    this.#init();
  }
}
