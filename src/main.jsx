import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
       <HelmetProvider>
       <RouterProvider router={router}>
        </RouterProvider>
       </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
