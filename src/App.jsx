import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export async function initializeClevertap(){
  const clevertapModule = await import("clevertap-web-sdk");

  // Correct Accounts
  // clevertapModule.default.init("ZWW-WWW-WW4Z", "in1");
  // clevertapModule.default.init("ZWW-WWW-WWRZ", "eu1");

  // Incorrect Account testing
  clevertapModule.default.init("incorrect-id", "eu1");
  


  clevertapModule.default.privacy.push({ optOut: false });
  clevertapModule.default.privacy.push({ useIP: true });
  clevertapModule.default.setLogLevel(3);
  console.log({clevertapModule})
  return clevertapModule.default;
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    initializeClevertap();
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
