import '@/styles/globals.sass'
import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from "react-query"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider
      client={new QueryClient()}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App