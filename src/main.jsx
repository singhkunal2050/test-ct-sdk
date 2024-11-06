import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import clevertap from 'clevertap-web-sdk';

// var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
clevertap.init('ZWW-WWW-WWRZ'); // Replace YOUR_ACCOUNT_ID, can be initialized just once

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
