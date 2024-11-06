import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import clevertap from 'clevertap-web-sdk';

function App() {
  const [count, setCount] = useState(0);
  const [accountId, setAccountId] = useState("ZWW-WWW-WWRZ");
  const [token, setToken] = useState("000-001");
  const [region, setRegion] = useState("eu1");

  const pushEvent = () => {
    clevertap.event.push("Added To Cart", {
      "Product name":"Armani Skinny Fit Jeans 28",
      "Category":"CLICK FOR Mens Accessories",
      "Price":53.02,
    "CT test": "test from console"
    });
  }

  useEffect(() => {
    // clevertap.account.push({ id: accountId }, region, "", token);
  }, []);

  return (
    <>
      <div>
          <nav data-count={count}>
          {count % 2 ? <div id="bell-selector">🛎️</div> : ''}
          <button onClick={pushEvent}>Push Event</button>
         </nav>

        <h1>Clevertap Web SDK SPA Test</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
