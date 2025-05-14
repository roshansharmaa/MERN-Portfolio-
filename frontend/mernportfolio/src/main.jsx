import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContext } from './components/Data'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </StrictMode>,
)
