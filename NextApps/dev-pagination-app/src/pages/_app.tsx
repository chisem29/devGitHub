import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from "react-query"

import '@/styles/globals.sass'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider
      client={new QueryClient()}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App