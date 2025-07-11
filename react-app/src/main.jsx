import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Front_End/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
