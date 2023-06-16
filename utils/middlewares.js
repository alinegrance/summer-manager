const validadeSummer = (req, res, next) => {
  const {name, age} = req.body;
  if(!name || !age) {
    return res.status(400).send({message: "Nome e idade sao campos obrigatorios"})
  }
  next();
}

module.exports = validadeSummer