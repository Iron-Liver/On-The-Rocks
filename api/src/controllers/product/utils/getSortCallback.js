module.exports = (sort, type) => {
  const sorts = {
    size: (a, b) => {
      if(parseInt(a.size.split(" ")[0]) > parseInt(b.size.split(" ")[0])) {
        return type === "ASC" ? 1 : -1;
      } 
      if(parseInt(a.size.split(" ")[0]) < parseInt(b.size.split(" ")[0])) {
        return type === "ASC" ? -1 : 1;
      }
      return 0;
    },
    price: (a, b) => {
      if((a.onSale ? a.onSale : a.price) > (b.onSale ? b.onSale : b.price)) {
        return type === "ASC" ? 1 : -1;
      } 

      if((a.onSale ? a.onSale : a.price) < (b.onSale ? b.onSale : b.price)) {
        return type === "ASC" ? -1 : 1;
      }

      return 0;
    }
  };

  return sorts[sort];
};