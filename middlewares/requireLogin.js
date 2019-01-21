module.exports = (req,res,next) => {
  if(!req.user) {
    return res.status(401).send({ error: "You Must Log In."});
  }
  next();
};

// 'next' is a callback to pass the request off to the next middleware in the chain
