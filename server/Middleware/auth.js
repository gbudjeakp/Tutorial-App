const jwt = require('jsonwebtoken');
const db = require("../Config/connection")



module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error( 'You do not have access to view page information or use action');

    const { id } = jwt.verify(token, "secretkeyforjwt");

    const user =  db.query('SELECT id FROM user WHERE id = ?', id)

    if (!id) throw new Error( 'You do not have access to view page information or use action');

    res.josn(user)

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }
};
