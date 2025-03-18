import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from './context/globalContext.tsx'
import { PrimeReactProvider } from 'primereact/api'
import { options } from './configs/global.ts'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';  // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';  // Iconos
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <HashRouter>
        <PrimeReactProvider value={options}>
          <App />
          <ToastContainer />
        </PrimeReactProvider>
      </HashRouter>
    </GlobalContextProvider>
  </StrictMode>,
)
