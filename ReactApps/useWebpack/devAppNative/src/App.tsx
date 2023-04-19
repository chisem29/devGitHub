import React, { FC } from 'react';
import { QueryClientProvider } from "react-query"

import './App.sass';
import Layout from './components/layout/Layout';

import client from './api/client';

const App : FC = () => {
  return (
    <>
      <QueryClientProvider
        client={client}>
        <Layout />
      </QueryClientProvider>
    </>
  )
}

export default App