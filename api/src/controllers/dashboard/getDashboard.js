const { User } = require('../../db');

module.exports = async (_req, res, next) => {
  try {

    const totalUsers = await User.findAll({
      attributes: ['createdAt']
    })

    const totalUsersPerMonths = totalUsers.reduce((acc, el) => {}, )

    res.status(200).send(response);
  } catch (error) {
    next(error);
    res.status(409).send();
  }
};