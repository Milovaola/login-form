import React from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { InputProps } from '@chakra-ui/input/dist/input'
import { useField } from 'react-final-form'
import { commonLabelStyle } from '../constants'
import { Error } from './icons'

export interface InputControlProps extends Omit<InputProps, 'name'> {
  name: string
  inputLeftAddon?: React.ReactNode
  label?: string
}

export const commonInputStyle = {
  _placeholder: { color: '#C0BCDF' },
  backgroundColor: 'white',
  fontSize: 'sm',
  lineHeight: '16px',
  color: '#413C5F',
  borderRadius: 0,
}

export const InputControl: React.FC<InputControlProps> = ({
  name,
  label,
  placeholder,
  inputLeftAddon,
  ...rest
}) => {
  const {
    input,
    meta: { error, touched },
  } = useField(name)

  const hasError = error && touched

  return (
    <FormControl isInvalid={hasError} mb={hasError ? 4 : 10}>
      <FormLabel {...commonLabelStyle} htmlFor={name}>
        {label}
      </FormLabel>
      <InputGroup>
        {inputLeftAddon && <InputLeftAddon>{inputLeftAddon}</InputLeftAddon>}
        <Input
          {...input}
          {...rest}
          {...commonInputStyle}
          isInvalid={hasError}
          id={name}
          placeholder={placeholder}
        />
        {hasError && (
          <InputRightElement>{hasError && <Error />}</InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage color="#DA2121">{error}</FormErrorMessage>
    </FormControl>
  )
}

InputControl.displayName = 'InputControl'
