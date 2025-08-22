import * as yup from 'yup';

export const userSchema1 = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  phone: yup.number().min(6).required(),
})
export const userSchema2 = yup.object().shape({
  address: yup.string().min(6).required(),
  city:  yup.string().min(3).required(),
  zipCode:  yup.string().min(2).required(),
})