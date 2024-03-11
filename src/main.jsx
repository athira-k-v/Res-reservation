import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextShare from './Context/ContextShare.jsx'
import { menuContext } from './Context/menuShare.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <menuContext>
      <ContextShare>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextShare>
  </menuContext>
  </React.StrictMode>,
)
