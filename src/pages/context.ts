import { createContext } from 'react'
import { FORM_STEPS } from '../interfaces'

/**
 * Context of login form.
 */
interface LoginFormContextProps {
  /**
   * Current step of login form.
   */
  step: FORM_STEPS

  /**
   * Change step of login form.
   */
  changeStep(step: FORM_STEPS): void
}

export const LoginFormContext = createContext<LoginFormContextProps>(
  {} as LoginFormContextProps
)
