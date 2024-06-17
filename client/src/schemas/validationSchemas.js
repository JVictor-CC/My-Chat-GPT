import * as yup from 'yup'

export const registrationSchema = yup
  .object({
    username: yup
      .string()
      .required('Username Required!')
      .min(3, 'Username must have at least 3 characters'),
    email: yup.string().required('Email Required!').email('Invalid Email'),
    password: yup
      .string()
      .required('Password Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\S*$/, 'No Whitespaces Allowed'),
    passwordConfirmation: yup
      .string()
      .required('Password Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\S*$/, 'No Whitespaces Allowed')
      .oneOf([yup.ref('password')], 'Password doesnt match'),
  })
  .required()

export const loginSchema = yup
  .object({
    email: yup.string().required('Email Required!').email('Invalid Email'),
    password: yup
      .string()
      .required('Password Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/^\S*$/, 'No Whitespaces Allowed'),
  })
  .required()
