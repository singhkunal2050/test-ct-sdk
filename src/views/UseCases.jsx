import React, { useEffect } from "react";
import clevertap from "clevertap-web-sdk";

const UseCases = () => {
  const makeId = (length) => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () =>
      possible.charAt(Math.floor(Math.random() * possible.length))
    ).join("");
  };

  const pushProfile = () => {
    const id = makeId(5);
    clevertap.profile.push({
      Site: {
        Name: `User ${id}`,
        Email: `${id}@clevertap.com`,
        Phone: "+917710004770",
        Gender: "M",
        Employed: "Y",
        Education: "Graduate",
        Married: "Y",
        DOB: new Date().toISOString(),
        Language: "Deutsche",
        "MSG-email": true,
        "MSG-push": true,
        "MSG-sms": true,
      },
    });
    console.log("Push profile successful");
  };

  const pushEvent = (eventName, eventData = {}) => {
    clevertap.event.push(eventName, eventData);
    console.log(`${eventName} event pushed`);
  };

  const pushSelectedEvents = () => {
    const addedToCart = document.getElementById("adc").checked;
    const productSold = document.getElementById("ps").checked;
    const productViewed = document.getElementById("pv").checked;

    if (!addedToCart && !productSold && !productViewed) {
      alert("Select at least one event");
      return;
    }

    if (addedToCart) pushEvent("Added to Cart");
    if (productSold) pushEvent("Product Sold");
    if (productViewed) pushEvent("Product Viewed");

    document.getElementById("adc").checked = false;
    document.getElementById("ps").checked = false;
    document.getElementById("pv").checked = false;
  };

  const enablePushNotifications = () => {
    clevertap.notifications.push({
      titleText: "Wish to receive push notifications?",
      bodyText: "Click Yes to receive push notifications",
      okButtonText: "Yes",
      rejectButtonText: "No",
      serviceWorkerPath: "/clevertap_sw.js",
    });
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("Local Storage cleared");
  };

  const renderLocalStorage = () => {
    const LRU_CACHE = decodeURIComponent(localStorage.getItem("WZRK_X") || "");
    const WZRK_K = decodeURIComponent(localStorage.getItem("WZRK_K") || "");
    const WZRK_G = decodeURIComponent(localStorage.getItem("WZRK_G") || "");
    const WZRK_EV = decodeURIComponent(localStorage.getItem("WZRK_EV") || "");
    const WZRK_ARP = decodeURIComponent(localStorage.getItem("WZRK_ARP") || "");

    return (
      <div>
        <p>WZRK_K: {WZRK_K}</p>
        <p>WZRK_G: {WZRK_G}</p>
        <p>LRU_CACHE: {LRU_CACHE}</p>
        <p>WZRK_EV: {WZRK_EV}</p>
        <p>WZRK_ARP: {WZRK_ARP}</p>
      </div>
    );
  };

  const [localStorageData, setLocalStorageData] = React.useState(null);

  const handleShowLocalStorage = () => {
    setLocalStorageData(renderLocalStorage());
  };

  useEffect( () => {
    clevertap.event.push('Use Cases Page Loaded');

    return () => {
        clevertap.event.push('Use Cases Page Closed');
    }
  }, [])

  return (
    <div>
      <h1>Use Cases</h1>
      <button onClick={pushProfile}>Random Profile Push</button>
      <button onClick={() => pushEvent("Product Searched")}>
        Product Searched
      </button>
      <button onClick={() => pushEvent("Added to Cart")}>Add to Cart</button>
      <button onClick={() => pushEvent("Charged", { "Product name": "Watch" })}>
        Charged
      </button>
      <button onClick={enablePushNotifications}>
        Enable Push Notifications
      </button>
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
      <hr />
      <div>
        <label>
          <input type="checkbox" id="adc" /> Added to Cart
        </label>
        <br />
        <label>
          <input type="checkbox" id="ps" /> Product Sold
        </label>
        <br />
        <label>
          <input type="checkbox" id="pv" /> Product Viewed
        </label>
        <br />
        <button onClick={pushSelectedEvents}>Push Selected Events</button>
      </div>
      <hr />
      <button onClick={handleShowLocalStorage}>Show Local Storage</button>
      {localStorageData && <div>{localStorageData}</div>}
    </div>
  );
};

export default UseCases;
