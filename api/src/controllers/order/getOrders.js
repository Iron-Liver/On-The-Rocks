const { Order, User, Order_products, Product } = require('../../db');
const getFilterCallback = require('./utils/getFilterCallback');

module.exports = async (req, res, next) => {

  const { itemsPerPage, orderBy, filterBy, userId } = req.body;
  let { page } = req.body;

  try {

    const [ sort, type ] = orderBy.split("-");

    const query = {
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
      order: [[sort, type]]
    }

    if(userId) {
      query.where = {
        userId
      };
      query.include = [{
        model: Order_products,
        attributes: ["units", "productId", "createdAt", "unitPrice"],
        include: [Product],
      }];
    } else {
      query.include = {
        model: User,
        attributes: ['name', 'username']
      };
    }

    const orders = await Order.findAll(query);

    const filters = Object.entries(filterBy);

    let filtered = orders.filter(order => {
      for(filter of filters) {
        if(getFilterCallback(filter[0], filter[1])(order) === false) {
          return false
        }
      }
      return true;
    })
    
    const pages = Math.ceil(filtered.length / itemsPerPage);
    
    if(page > pages) {
      page = pages;
    }
    
    const from = itemsPerPage * page - itemsPerPage;
    const to = page * itemsPerPage;

    const total = filtered.length;

    const pageOrders = filtered.slice(from, to);

    const response = {
      page,
      pages,
      total,
      data: pageOrders,
      orderBy: {
        [sort]: type
      },
      filters: filterBy ? filterBy : false
    }; 

    return res.status(200).send(response);
  } catch (err) {
    next(err);
    return res.status(409).send({error: err.message});
  }
};