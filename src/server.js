class App {
  constructor() {
    this.express = express();
    this.isDev = proccess.env.NODE_ENV !== "production";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routers"));
  }
}

module.exports = new App().express;
