import * as React from 'react'
import synapse from 'ardor-synapse'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LoginFormPage } from './pages'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

export const App = () => {
  React.useEffect(() => {
    synapse.init()
    return () => synapse.destroy()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LoginFormPage />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
