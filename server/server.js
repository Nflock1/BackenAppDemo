const express = require("express");
const routes = require("./routes/user")
const cors = require('cors');

function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(routes);
  return app
}

module.exports = createServer;