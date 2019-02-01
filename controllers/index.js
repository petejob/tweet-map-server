const T = require("../config/twit");

exports.fetchTweets = (req, res, next) => {
  const { lat, long, radius } = req.body;
  console.log(`new request ---> "${lat},${long},${radius}mi"`);
  T.get("search/tweets", { geocode: `${lat},${long},${radius}km`, count: 40 })
    .then(({ data }) => res.send({ data }))
    .catch(next);
};
