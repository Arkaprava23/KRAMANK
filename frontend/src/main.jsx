import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import AuthContextProvider from './Context/AuthContext.jsx';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>

    <AuthContextProvider>
    <Toaster/>
      <App />
    </AuthContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
