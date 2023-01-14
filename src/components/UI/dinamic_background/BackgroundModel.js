export class CanvasWeather {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context;
    this.particles = [];
    this.animationFrame;
  }
  canvasInit() {
    this.context = this.canvas.getContext("2d");
    this.resizeHandlerBind = this.resizeHandler.bind(this);
    window.addEventListener("resize", this.resizeHandlerBind, false);
  }
  resizeHandler() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  resizeListener() {}

  reset() {
    window.removeEventListener("resize", this.resizeHandlerBind);
    cancelAnimationFrame(this.animationFrame);
  }

  start() {
    console.log(start);
  }
}
