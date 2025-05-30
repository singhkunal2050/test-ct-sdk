import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import clevertap from 'clevertap-web-sdk';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const accountId = urlParams.get("accountId") ?? `ZWW-WWW-WWRZ`;
const region = urlParams.get("region") ?? 'eu1';
const token = urlParams.get("token");

// var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
clevertap.init(accountId, region, '' , '' , { customId: 'test_spa_id', antiFlicker : {}}); // Replace YOUR_ACCOUNT_ID, can be initialized just once
// clevertap.init(accountId, region); // Replace YOUR_ACCOUNT_ID, can be initialized just once
clevertap.spa = true 
setTimeout(() => {
 clevertap.setOffline(false)
}, 1000);
 clevertap.notifications.push({
    titleText: "Would you like to receive Push Notifications?",
    bodyText:
      "We promise to only send you relevant content and give you updates on your transactions",
    okButtonText: "Sign me up!",
    rejectButtonText: "No thanks",
    okButtonColor: "#F28046",
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
