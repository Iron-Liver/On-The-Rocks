const { Product, Category } = require("../../db");
const getFilterCallback = require("./utils/getFilterCallback");

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
          },
          through: {
              attributes: []
          }
        }
      })

      return res.status(200).send(product);
    }

    const [ sort, type ] = orderBy.split("-");

    const query = {
      include: [Category]
    }

    let products = await Product.findAll(query);

    if(sort === "size") {
      products = products.sort((a, b) => {
        if(parseInt(a.size.split(" ")[0]) > parseInt(b.size.split(" ")[0])) {
          return type === "ASC" ? 1 : -1
        } 
        if(parseInt(a.size.split(" ")[0]) < parseInt(b.size.split(" ")[0])) {
          return type === "ASC" ? -1 : 1
        }
        return 0
      })
    }

    if(sort === "price") {
      products = products.sort((a, b) => {
        if((a.onSale ? a.onSale : a.price) > (b.onSale ? b.onSale : b.price)) {
          return type === "ASC" ? 1 : -1
        } 

        if((a.onSale ? a.onSale : a.price) < (b.onSale ? b.onSale : b.price)) {
          return type === "ASC" ? -1 : 1
        }

        return 0
      })
    }
    
    let filtered = products;

    if(filterBy.category) {
      if(filterBy.category !== "all") {
        filtered = filtered.filter(product => {
          return product.categories.some(category => category.name === filterBy.category)   
        })
      }
    }

    if(filterBy.onSale && filterBy.onSale === "_") {
      filtered = filtered.filter(product => {
        return product.onSale !== null
      })
    }

    if(filterBy.name) {
      filtered = filtered.filter(product => {
        const string = filterBy.name.toLowerCase().replace(/-/g, ' ');
        return product.name.toLowerCase().includes(string);
      })
    }

    if(filterBy.price && filterBy.price.length) {
      filtered = filtered.filter(product => {
        for(filter of filterBy.price) {
          if(getFilterCallback(filter)(product) === true) return true
        }
        return false;
      })
    }

    if(filterBy.size && filterBy.size.length) {
      filtered = filtered.filter(product => {
        for(filter of filterBy.size) {
          if(getFilterCallback(filter)(product) === true) return true
        }
        return false;
      })
    }
 
    const pages = Math.ceil(filtered.length / itemsPerPage);
    
    if(page > pages) {
      page = pages;
    }
    
    if(page < 1) {
      page = 1
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
      orderBy: {
        [sort]: type
      },
      filters: filterBy ? filterBy : false
    }; 

    return res.status(200).send(response)
  } catch (error) {
    next(error)
  }
};

// const { product } = req.query;
// if (!product) {
//   const product = await Product.findAll({
//     include: {
//       model: Category,
//       attributes: {
//           include: ['name'],
//           exclude: ['createdAt', 'updatedAt']
//       },
//       through: {
//           attributes: []
//       }
//   }
//   })
//   res.send(product).status(200)
// } else {
//   const product = await Product.findAll({
//     where: {
//       name: { [Op.iLike]: `%${product}%` }
//     },
//     include: {
//       model: Category,
//       attributes: {
//           include: ['name'],
//           exclude: ['createdAt', 'updatedAt']
//       },
//       through: {
//           attributes: []
//       }
//   }
//   })
//   res.send(product).status(200)