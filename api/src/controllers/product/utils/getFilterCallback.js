module.exports = (name) => {
  const cbs = {
    U100: (product) => {
      if((product.onSale || product.price) < 100) {
        return true;
      }
    }, 
    U250: (product) => {
      if((product.onSale || product.price) >= 100 && (product.onSale || product.price) < 250) {
        return true;
      }
    },
    U500: (product) => {
      if((product.onSale || product.price) >= 250 && (product.onSale || product.price) < 500) {
        return true;
      }
    }, 
    A500: (product) => {
      if((product.onSale || product.price) > 500) {
        return true;
      }
    },
    U200ml: (product) => {
      const size = parseFloat(product.size.split(" ")[0])
      if(size <= 200) {
        return true;
      }
    },
    U500ml: (product) => {
      const size = parseFloat(product.size.split(" ")[0])
      if(size >= 200 && size <= 500) {
        return true;
      }
    },
    U700ml: (product) => {
      const size = parseFloat(product.size.split(" ")[0])
      if(size >= 500 && size <= 700) {
        return true;
      }
    },
    U750ml: (product) => {
      const size = parseFloat(product.size.split(" ")[0])
      if(size >= 700 && size <= 750) {
        return true;
      }
    },
    A750ml: (product) => {
      const size = parseFloat(product.size.split(" ")[0])
      if(size >= 750) {
        return true;
      }
    }
  }

  if(cbs[name]) {
    return cbs[name]
  } else {
    return () => true
  }
  
};