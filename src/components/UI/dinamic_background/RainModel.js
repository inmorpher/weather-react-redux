import { CanvasWeather } from "./BackgroundModel";

export class RainBg extends CanvasWeather {
  constructor(canvas, rainLevel) {
    super(canvas);
    this.rainLevel = rainLevel;
  }

  #rainInit() {
    for (let i = 0; i < this.rainLevel; i++) {
      const rainDropColor = ["#77A2BA", "#4B748C", "#87A8BB", "#3A88B5"];
      this.particles.push({
        width: 50,
        height: Math.round(Math.random() * 30 + 10),
        pX: Math.round(Math.random() * this.canvas.width),
        pY: Math.round(Math.random() * this.canvas.height),
        speed: Math.round(Math.random() * 20) + 10,
        color: rainDropColor[Math.round(Math.random() * 4)],
      });
    }
  }
  #drawRain() {
    this.context.lineCap = "round";
    this.context.lineWidth = 3;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((elem) => {
      this.context.beginPath();
      this.context.strokeStyle = elem.color;
      this.context.moveTo(elem.pX, elem.pY);
      this.context.lineTo(elem.pX, elem.pY + elem.height);
      this.context.stroke();
    });
  }
  #updateRain() {
    this.particles.forEach((elem) => {
      elem.pY = elem.pY + elem.speed;
      if (elem.pY > this.canvas.height + elem.height) {
        elem.pY = -10;
        elem.pX = Math.round(Math.random() * this.canvas.width);
      }
    });
  }
  #rainAnimate() {
    this.#drawRain();
    this.#updateRain();
    requestAnimationFrame(() => {
      this.#rainAnimate();
    });
  }
  #init() {
    this.canvasInit();
    this.#rainInit();
    this.#rainAnimate();
  }

  start() {
    this.#init();
  }
}
