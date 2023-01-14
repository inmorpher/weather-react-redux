export class CanvasWeather {
  constructor(canvas) {
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context;
    this.particles = [];
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
  }

  start() {
    console.log(start);
  }
}
