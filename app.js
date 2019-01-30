const app = require("express")();
const { fetchTweets } = require("./controllers");

app.get("/", fetchTweets);

module.exports = app;
