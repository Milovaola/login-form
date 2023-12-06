import * as yup from 'yup'

const requiredMessage = 'Required field'
const invalidFormatMessage =
  'Contains invalid characters or has an invalid format'
const invalidMinLength = ({ min }: { min: number }) =>
  `The field must contain a minimum of ${min} characters`

const invalidMaxLength = ({ max }: { max: number }) =>
  `The field must contain a maximum of ${max} characters`

export const initialInfoSchema = yup.object().shape({
  username: yup
    .string()
    .required(requiredMessage)
    .matches(/^[A-Za-z]*$/, invalidFormatMessage)
    .min(4, invalidMinLength)
    .max(12, invalidMaxLength),
  phoneNumber: yup
    .string()
    .required(requiredMessage)
    .matches(/^[1-9]*$/, invalidFormatMessage),
  email: yup.string().email(invalidFormatMessage).required(requiredMessage),
  country: yup.string().required(requiredMessage),
})

export const passwordScreenSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required(requiredMessage)
    .matches(/^[A-Za-z\d]{8,16}$/, invalidFormatMessage)
    .min(8, invalidMinLength)
    .max(16, invalidMaxLength),
  newPasswordConfirm: yup
    .string()
    .required(requiredMessage)
    .oneOf(
      [yup.ref('newPassword')],
      'The "Password" and "Repeat passport" details do not match.'
    ),
})
