const runAll = require("npm-run-all");
console.log("dddddd");
runAll(
  [
    "node microservice-category/server.js",
    "node microservice-product/server.js",
    "node microservice-order/server.js",
    "node microservice-saga-category/server.js",
    "node microservice-saga-product/server.js",
    "node web-host/server.js"
  ],
  { parallel: false }
)
  .then(() => {
    console.log("done!");
  })
  .catch(err => {
    console.log("failed!", JSON.stringify(err));
  });
