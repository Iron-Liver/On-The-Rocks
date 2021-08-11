module.exports = (prop, param) => {
  const stringOrderProperties = [
    'firstName',
    'lastName',
    'address',
    'city',
    'status'
  ];

  const intOrderProperties = [
    'id',
    'total'
  ];

  const userProperties = [
    'name',
    'username'
  ];

  if(stringOrderProperties.includes(prop)) {
    return (order) => {
      if (!order[prop].toLowerCase().includes(param.toLowerCase())) {
        return false;
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
