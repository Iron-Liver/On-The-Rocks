const { User } = require('../../db');

module.exports = async (_req, res, next) => {
  try {
    res.status(200).send();
  } catch (error) {
    next(error);
    res.status(409).send();
  }
};