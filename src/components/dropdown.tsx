import React, { useCallback, useState } from 'react'
import {
  Popover,
  PopoverBody,
  PopoverTrigger,
  useDisclosure,
  PopoverContent,
  Text,
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Option } from '../interfaces'
import { ArrowDown, ArrowUp, Check } from './icons'
import { commonInputStyle, InputControlProps } from './input-control'
import { useField } from 'react-final-form'
import { commonLabelStyle } from '../constants'

interface DropdownProps extends InputControlProps {
  options: Option[]

  onSelectOption?(value: string): void
}

export const Dropdown: React.FC<DropdownProps> = ({
  onSelectOption,
  options,
  ...rest
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [value, setValue] = useState<string>('')

  const handleSelectOption = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, option: Option) => {
      e.preventDefault()

      setValue(option.value)

      if (onSelectOption) {
        onSelectOption(option.value)
      }

      onClose()
    },
    [setValue, onClose, onSelectOption]
  )

  return (
    <Box>
      <Popover matchWidth isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Box>
            <InputGroup onClick={onOpen}>
              <Input
                {...rest}
                {...commonInputStyle}
                isReadOnly
                cursor={'pointer'}
              />
              <InputRightElement>
                {isOpen ? <ArrowUp /> : <ArrowDown />}
              </InputRightElement>
            </InputGroup>
          </Box>
        </PopoverTrigger>
        <PopoverContent
          maxH={'200px'}
          overflowY={'auto'}
          width={'100%'}
          borderRadius={0}
        >
          <PopoverBody p={0}>
            {options.length > 0 &&
              options.map((option: Option, index: number) => {
                const isChoosedOption = value === option.value

                return (
                  <Flex
                    as={'button'}
                    width={'100%'}
                    textAlign={'left'}
                    _hover={{ backgroundColor: '#F6F4FF' }}
                    cursor="pointer"
                    py={3}
                    px={4}
                    backgroundColor={isChoosedOption ? '#F6F4FF' : 'white'}
                    onClick={(e: any) => handleSelectOption(e, option)}
                    key={index}
                  >
                    <Text
                      fontSize="sm"
                      fontWeight={isChoosedOption ? 'semibold' : 'normal'}
                      lineHeight="16px"
                      color="#413C5F"
                      mr={2}
                    >
                      {option.label}
                    </Text>
                    {isChoosedOption && <Check />}
                  </Flex>
                )
              })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

Dropdown.displayName = 'Dropdown'

export const DropdownControl: React.FC<DropdownProps & { name: string }> = ({
  name,
  label,
  ...restProps
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
      <Dropdown {...input} {...restProps} id={name} />
      <FormErrorMessage color="#DA2121">{error}</FormErrorMessage>
    </FormControl>
  )
}

DropdownControl.displayName = 'DropdownControl'
