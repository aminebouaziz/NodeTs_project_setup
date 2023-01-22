import express from "express";

//internal imports
// import MasterRouter from "./router/MasterRouter";

/**
 * Express server application class.
 */
class ServerApp {
  public app = express();
  //   public router = MasterRouter;
}

// initialize server app
const server = new ServerApp();
//   server.app.use(express.urlencoded({ extended: true }));
//   server.app.use(cookieParser());
//   server.app.use(express.json());

// make server app handle any route starting with '/api'
// server.app.use("/api", server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

const app = express();

module.exports = app;
