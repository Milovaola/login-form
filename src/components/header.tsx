import React from 'react'
import { BoxProps, Center, Text } from '@chakra-ui/react'

interface HeaderProps extends BoxProps {
  headerText: string
  subHeaderText: string
}

export const Header: React.FC<HeaderProps> = ({
  headerText,
  subHeaderText,
  ...rest
}) => (
  <Center {...rest} flexDirection="column">
    <Text fontWeight={500} color={'#413C5F'} fontSize={'4xl'} mb={4}>
      {headerText}
    </Text>
    <Text fontWeight={500} color={'#817CA5'} fontSize="xl">
      {subHeaderText}
    </Text>
  </Center>
)

Header.displayName = 'Header'
