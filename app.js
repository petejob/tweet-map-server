const app = require("express")();
const { fetchTweets } = require("./controllers");
const { handle404, handle400, handle500 } = require("./error");
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.get("/", fetchTweets);
app.use(handle400);
app.use(handle404);
app.use(handle500);

module.exports = app;
