import clevertap from 'clevertap-web-sdk';
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
//   const [accountId, setAccountId] = useState("ZWW-WWW-WWRZ");
//   const [token, setToken] = useState("000-001");
//   const [region, setRegion] = useState("eu1");

  const pushEvent = () => {
    clevertap.event.push("Added To Cart", {
      "Product name": "Armani Skinny Fit Jeans 28",
      Category: "CLICK FOR Mens Accessories",
      Price: 53.02,
      "CT test": "test from console",
    });
  };

  useEffect(() => {
    // clevertap.account.push({ id: accountId }, region, "", token);
  }, []);

  return (
    <div>
        <h1>Home Route</h1>
      <div data-count={count}>
        {count % 2 == 0 ? <div id="bell-selector">🛎️</div> : ""}
        <button onClick={pushEvent}>
          Push Event For Web Inbox Notification
        </button>
      </div>

      <h1>Clevertap Web SDK SPA Test</h1>
      <div className="card">
        <p>Increment Count to rerender the Inbox Icon</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
