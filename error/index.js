exports.handle404 = (req, res, next) => {
  console.log("404: resource not found");
  res.status(404).send({ msg: "404: resource not found" });
};

exports.handle400 = (err, req, res, next) => {
  if (err.code === 400) {
    console.log("400: bad request");
    res.status(400).send({ msg: "400: bad request" });
  } else next(err);
};

exports.handle500 = (err, req, res, next) => {
  console.log("500: server error", err);
  res.status(500).send({ msg: "500: server error" });
};
