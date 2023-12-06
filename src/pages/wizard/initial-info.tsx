import React, { FC, useCallback, useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { Button, DropdownControl, InputControl } from '../../components'
import { FORM_FIELD_LABELS, FORM_FIELDS } from '../../constants'
import { LoginFormContext } from '../context'
import { CountryEntity, FORM_STEPS } from '../../interfaces'
import { useFormState, useForm } from 'react-final-form'
import { useQuery } from 'react-query'
import { getCountries } from '../../service'

export const InitialInfo: FC = () => {
  const { changeStep } = useContext(LoginFormContext)

  const { change } = useForm()

  const { valid } = useFormState()

  /** Get a list of countries. */
  const { data = [] } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
    select: (data: CountryEntity[]) =>
      data.map(({ name }: CountryEntity) => ({
        value: name.common,
        label: name.common,
      })),
  })

  const handleChangeCountry = useCallback(
    (value: string) => {
      change(FORM_FIELDS.COUNTRY, value)
    },
    [change]
  )

  const handleChangeStep = () => changeStep(FORM_STEPS.PASSWORD_SCREEN)

  return (
    <Box>
      <InputControl
        name={FORM_FIELDS.USERNAME}
        placeholder="Input username"
        label={FORM_FIELD_LABELS[FORM_FIELDS.USERNAME]}
      />
      <InputControl
        name={FORM_FIELDS.EMAIL}
        placeholder="Input email"
        label={FORM_FIELD_LABELS[FORM_FIELDS.EMAIL]}
      />
      <InputControl
        name={FORM_FIELDS.PHONE_NUMBER}
        placeholder="Input phone number"
        type="tel"
        inputLeftAddon={'+'}
        label={FORM_FIELD_LABELS[FORM_FIELDS.PHONE_NUMBER]}
      />
      <DropdownControl
        name={FORM_FIELDS.COUNTRY}
        onSelectOption={handleChangeCountry}
        placeholder={'Select country'}
        label={FORM_FIELD_LABELS[FORM_FIELDS.COUNTRY]}
        options={data}
      />
      <Button type={'button'} onClick={handleChangeStep} isDisabled={!valid}>
        {'Continue'}
      </Button>
    </Box>
  )
}

InitialInfo.displayName = 'InitialInfo'
