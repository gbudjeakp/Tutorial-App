const jwt = require('jsonwebtoken');
const db = require("../Config/connection")


module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error('Unauthenticated');

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await  "Add stuff"

    if (!user) throw new Error('Unauthenticated');

    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }
};
