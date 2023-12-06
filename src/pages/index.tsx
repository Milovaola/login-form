import React, { FC, useCallback, useContext, useMemo, useState } from 'react'
import { LoginFormContext } from './context'
import { FORM_STEPS, FormData } from '../interfaces'
import { InitialInfo, PasswordScreen, Review } from './wizard'
import background from '../background.png'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Form } from 'react-final-form'
import { initialInfoSchema, passwordScreenSchema } from './validation'
import { validateFormValues } from '../utils'
import { Stepper } from '../components/stepper'
import { Header } from '../components'
import { STEP_LABELS } from '../constants'
import { FormApi } from 'final-form'

const VIEWS = {
  [FORM_STEPS.INITIAL_INFO]: InitialInfo,
  [FORM_STEPS.PASSWORD_SCREEN]: PasswordScreen,
  [FORM_STEPS.REVIEW]: Review,
}

const LoginForm: FC = () => {
  const { step, changeStep } = useContext(LoginFormContext)

  const CurrentForm = useMemo(() => VIEWS[step], [step])

  const validationSchema = useMemo(
    () =>
      step === FORM_STEPS.INITIAL_INFO
        ? initialInfoSchema
        : passwordScreenSchema,
    [step]
  )

  const onSubmit = useCallback(
    (_: FormData, formApi: FormApi): void => {
      formApi.reset()
      changeStep(FORM_STEPS.INITIAL_INFO)
    },
    [changeStep]
  )

  return (
    <Box
      backgroundImage={`url(${background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      minHeight="100vh"
      backgroundColor="#F7F6FB"
    >
      <Grid py={20} pl={20} templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={2}>
          <Stepper currentStep={step} />
        </GridItem>
        <GridItem>
          <Box>
            <Header
              headerText={'Super test form'}
              subHeaderText={STEP_LABELS[step]}
              mb={'60px'}
            />
            <Box
              width="400px"
              backgroundColor={'#817CA5'}
              borderRadius={'20px'}
              px="20px"
              py="40px"
            >
              <Form
                onSubmit={onSubmit}
                validate={validateFormValues(validationSchema)}
                render={(props) => (
                  <form>
                    <CurrentForm {...props} />
                  </form>
                )}
              />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

LoginForm.displayName = 'LoginForm'

export const LoginFormPage: FC = () => {
  const [step, setStep] = useState(FORM_STEPS.INITIAL_INFO)

  const contextValues = useMemo(
    () => ({
      step,
      changeStep: setStep,
    }),
    [step, setStep]
  )

  return (
    <LoginFormContext.Provider value={contextValues}>
      <LoginForm />
    </LoginFormContext.Provider>
  )
}

LoginFormPage.displayName = 'LoginFormPage'
