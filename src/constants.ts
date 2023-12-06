import { FORM_STEPS } from './interfaces'

/**
 * Fields of the form.
 */
export enum FORM_FIELDS {
  USERNAME = 'username',
  EMAIL = 'email',
  PHONE_NUMBER = 'phoneNumber',
  COUNTRY = 'country',
  NEW_PASSWORD = 'newPassword',
  NEW_PASSWORD_CONFIRM = 'newPasswordConfirm',
}

/**
 * Labels for form fields.
 */
export const FORM_FIELD_LABELS = {
  [FORM_FIELDS.USERNAME]: 'Username',
  [FORM_FIELDS.EMAIL]: 'Email',
  [FORM_FIELDS.PHONE_NUMBER]: 'Phone number',
  [FORM_FIELDS.COUNTRY]: 'Country',
  [FORM_FIELDS.NEW_PASSWORD]: 'Password',
  [FORM_FIELDS.NEW_PASSWORD_CONFIRM]: 'Repeat passport',
}

export const commonLabelStyle = {
  fontSize: 'sm',
  lineHeight: '16px',
  color: 'white',
}

export const STEP_LABELS = {
  [FORM_STEPS.INITIAL_INFO]: 'Initial info',
  [FORM_STEPS.PASSWORD_SCREEN]: 'Password screen',
  [FORM_STEPS.REVIEW]: 'Review',
}
