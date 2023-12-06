/**
 * Interface of the country object.
 */
export interface CountryEntity {
  name: {
    common: string
    nativeName: {
      eng: {
        common: string
        official: string
      }
    }
    official: string
  }
}

/**
 * Interface of the option passed to Select.
 */
export interface Option {
  value: string
  label: string
}

/**
 * Basic steps of the form.
 */
export enum FORM_STEPS {
  INITIAL_INFO = 'INITIAL_INFO',
  PASSWORD_SCREEN = 'PASSWORD_SCREEN',
  REVIEW = 'REVIEW',
}

/**
 * Fields of the form.
 */
export interface FormData {
  username?: string
  email?: string
  phoneNumber?: string
  country?: string
  newPassword?: string
  newPasswordConfirm?: string
}
