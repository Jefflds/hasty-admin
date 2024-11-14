import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './view/styles/index.css';
import { App } from './view/App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)