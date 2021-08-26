module.exports = (prop, param) => {
  const stringOrderProperties = [
    'category',
    // 'lastName',
    // 'address',
    // 'city',
    // 'status'
  ];

  const intOrderProperties = [
    'price'
  ];

  if(stringOrderProperties.includes(prop)) {
    return (product) => {
      if (!product[prop].includes(param)) {
        return true;
      }
    }
  }
  
  if (intOrderProperties.includes(prop)) {
    return (order) => {
      if(order[prop] !== parseFloat(param)) {
        return false;
      }
    }
  }

  if (userProperties.includes(prop)) {
    return (order) => {
      if (!order.user[prop].toLowerCase().includes(param.toLowerCase())) {
        return false;
      }
    }
  } 

  return () => true 
};