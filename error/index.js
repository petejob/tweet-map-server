exports.handle404 = (req, res, next) => {
  console.log("404: resource not found");
  res.status(404).send({ msg: "404: resource not found" });
};
