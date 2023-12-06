import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { FORM_FIELD_LABELS, FORM_FIELDS } from '../../constants'
import { Button, InputControl } from '../../components'
import { FORM_STEPS } from '../../interfaces'
import { LoginFormContext } from '../context'
import { useFormState } from 'react-final-form'

export const PasswordScreen: React.FC = () => {
  const { changeStep } = useContext(LoginFormContext)

  const { valid } = useFormState()
  const handleChangeStep = () => changeStep(FORM_STEPS.REVIEW)

  return (
    <Box>
      <InputControl
        name={FORM_FIELDS.NEW_PASSWORD}
        placeholder="Input password"
        type="password"
        label={FORM_FIELD_LABELS[FORM_FIELDS.NEW_PASSWORD]}
      />
      <InputControl
        name={FORM_FIELDS.NEW_PASSWORD_CONFIRM}
        placeholder="Repeat password"
        type="password"
        label={FORM_FIELD_LABELS[FORM_FIELDS.NEW_PASSWORD_CONFIRM]}
      />
      <Button type={'button'} onClick={handleChangeStep} isDisabled={!valid}>
        {'Continue'}
      </Button>
    </Box>
  )
}

PasswordScreen.displayName = 'PasswordScreen'
