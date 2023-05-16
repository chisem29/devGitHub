import '@/styles/globals.sass'
import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider
      client={new QueryClient()}>
      <Component {...pageProps} />
      <ReactQueryDevtools
        initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App