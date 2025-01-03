import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import FilesP from './Context.jsx/VikasContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FilesP>
     <App />
  </FilesP>
   </BrowserRouter>
  ,
)