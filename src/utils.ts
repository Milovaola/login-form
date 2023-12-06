import { AnySchema, ValidationError } from 'yup'
import { setIn } from 'final-form'

/**
 * Helper for validating form values with Yup schema.
 */
export const validateFormValues =
  (schema: AnySchema | (() => AnySchema)) => async (values: any) => {
    if (typeof schema === 'function') schema = schema()

    try {
      await schema.validate(values, { abortEarly: false })
    } catch (error: any) {
      return (error.inner as ValidationError[]).reduce(
        (errors: any, error: any) => {
          return setIn(errors, error.path, error.message)
        },
        {}
      )
    }
  }
