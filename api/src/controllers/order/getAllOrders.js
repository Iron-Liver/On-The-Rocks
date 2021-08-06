const { Order, User } = require('../../db');
const getFilterCallback = require('./utils/getFilterCallback');

module.exports = async (req, res, next) => {

  const { itemsPerPage, orderBy, sort, filterBy, filterQuery } = req.body;
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

    let filtered = [...orders];

    filterBy.forEach((filter, index) => {
      filtered = filtered.filter(getFilterCallback(filter, filterQuery[index]));
    });
    
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
      filters: {
        filterBy: filterBy ? filterBy : null,
        filterQuery: filterQuery ? filterQuery : null
      },
    }; 

    return res.send(response).status(200);
  } catch (err) {
    next(err);
    return res.send({error: err.message}).status(409);
  }
};