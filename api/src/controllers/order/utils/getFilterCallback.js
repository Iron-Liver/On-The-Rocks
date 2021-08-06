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
    return (order) => order[prop].includes(param);
  }
  
  if (intOrderProperties.includes(prop)) {
    return (order) => order[prop] === parseFloat(param);
  }

  if(userProperties.includes(prop)) {
    return (order) => order.user[prop].includes(param);
  } 

  return () => true 
};
