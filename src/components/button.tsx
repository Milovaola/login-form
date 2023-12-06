import React from 'react'
import { Button as ChakraButton, Text } from '@chakra-ui/react'
import { ButtonProps } from '@chakra-ui/button/dist/button'

export const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  ...restProps
}) => (
  <ChakraButton
    {...restProps}
    backgroundColor={isDisabled ? '#A39FC1' : 'white'}
    borderRadius={4}
    isDisabled={isDisabled}
    height="60px"
    width="100%"
  >
    <Text fontSize="2xl" color={isDisabled ? '#8B85B1' : '#413C5F'}>
      {children}
    </Text>
  </ChakraButton>
)

Button.displayName = 'Button'
