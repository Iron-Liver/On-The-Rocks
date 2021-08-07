const { Order, User } = require('../../db');
const getFilterCallback = require('./utils/getFilterCallback');

module.exports = async (req, res, next) => {

  const { itemsPerPage, orderBy, sort, filterBy } = req.body;
  let { page } = req.body;

  try {
    const orders = await Order.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "address",
        "city",
        "total",
        "createdAt",
        "status",
      ],
      include: {
        model: User,
        attributes: ['name', 'username']
      },
      order: [[orderBy, sort]]
    });

    const filters = Object.entries(filterBy);

    let filtered = [...orders].filter(order => {
      for(filter of filters) {
        if(getFilterCallback(filter[0], filter[1])(order) === false) return false;
      }
      return true;
    })
    
    const pages = Math.ceil(filtered.length / itemsPerPage);
    
    if(page > pages) {
      page = pages;
    }
    
    const from = itemsPerPage * page - itemsPerPage;
    const to = page * itemsPerPage;

    const pageOrders = filtered.slice(from, to);

    const response = {
      page,
      pages,
      data: pageOrders,
      orderBy: [orderBy, sort],
      filters: filterBy ? filterBy : null
    }; 

    return res.send(response).status(200);
  } catch (err) {
    next(err);
    return res.send({error: err.message}).status(409);
  }
};