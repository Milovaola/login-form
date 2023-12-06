import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginFormPage } from './pages'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <LoginFormPage />
    </QueryClientProvider>
  </ChakraProvider>
)
