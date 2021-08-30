const { Product, Category } = require("../../db");
const getFilterCallback = require("./utils/getFilterCallback");
const getSortCallback = require("./utils/getSortCallback");

module.exports = async (req, res, next) => {

  const { itemsPerPage, orderBy, filterBy } = req.body;
  let { page } = req.body;

  try {
    if(!itemsPerPage && !orderBy && !filterBy && !page) {
      const product = await Product.findAll({
        include: {
          model: Category,
          attributes: {
              include: ['name'],
              exclude: ['createdAt', 'updatedAt']
          }
        }
      });

      return res.status(200).send(product);
    }

    const [ sort, type ] = orderBy.split("-");

    const query = {include: [Category]};

    let products = await Product.findAll(query);

    if(sort) {
      products = products.sort(getSortCallback(sort, type));
    }
    
    let filtered = products;

    const filters = Object.entries(filterBy);

    if(filters.length) {
      filtered = filtered.filter(product => {
        for(filter in filters) {
          if(filters[filter][0] === "onSale" && filters[filter][1] === "_") {
            if(product.onSale === null) {
              return false;
            } 
          }

          if(filters[filter][0] === "category") {
            if(filters[filter][1] !== "all") {
              if(!product.categories.some(category => category.name === filters[filter][1])) {
                return false;
              }   
            }
          }

          if(filters[filter][0] === "name") {
            const string = filters[filter][1].toLowerCase();
            if(!product.name.toLowerCase().includes(string)) {
              return false;
            }
          }

          if(filters[filter][0] === "size" || filters[filter][0] === "price" ) {
            let match = null;
            for(param of filters[filter][1]) {
              if(getFilterCallback(param)(product)) {
                match = true;
                break;
              } else {
                match = false;
              }  
            }
            if(match === false) {
              return false;
            } 
          }
        }
        return true;
      })
    }
 
    const pages = Math.ceil(filtered.length / itemsPerPage);
    
    if(page > pages) {
      page = pages;
    }
    
    if(page < 1) {
      page = 1;
    }
    
    const from = itemsPerPage * page - itemsPerPage;
    const to = page * itemsPerPage;
    
    const total = filtered.length;
    
    const pageProducts = filtered.slice(from, to);
    
    const response = {
      page,
      pages,
      total,
      itemsPerPage,
      data: pageProducts,
      orderBy: {[sort]: type},
      filters: filterBy ? filterBy : false
    }; 

    return res.status(200).send(response);
  } catch (error) {
    next(error);
    return res.status(409).send();
  }
};
