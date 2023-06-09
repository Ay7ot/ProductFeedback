import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.tsx'
import './index.css'
import { AppProvider } from './AppContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
