import * as yup from 'yup';

export const userSchema1 = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.number().min(6).required(),
})
export const userSchema2 = yup.object().shape({
  address: yup.string().required(),
  city:  yup.string().required(),
  zipCode:  yup.string().required(),
})