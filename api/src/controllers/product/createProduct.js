const { Product } = require("../../db");
const fs = require("fs")

module.exports = async (req, res, next) => {
  let { name, description, size, stock, categories, brand, sku, price , image } = req.body;
  console.log(name, description, size, stock, categories, brand, sku, price)
  var images = fs.readdirSync('../client/public/img')
  var img = []

  images.forEach(e=> {
    let a = e.split("-")
    if(a[0] === sku){
     img.push(e)
    }
    console.log("img", img)
   
  });

   if(!image){
    image = `/img/${images[0]}`
  } 

  if(image){
    img.push(image)
  }


  try {
    
    product = await Product.create({ name, description, size, stock, brand, sku, price, img, image});
    console.log("prod", product);
    await product.setCategories(categories);
    return res.json(product);
 
  } catch (error) {
    next(error)
    return res.send(['invalid inputs']).sendStatus(400)
  };
};

