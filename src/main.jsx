import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi' 
import { config } from './wagmiConfig' 

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}> 
      <QueryClientProvider client={queryClient}> 
        <Router />
      </QueryClientProvider> 
    </WagmiProvider> 
  </React.StrictMode>,
)
