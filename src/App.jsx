import "./App.css";
import Home from "./views/Home";
import UseCases from "./views/UseCases";
import About from "./views/About";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/spa">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/usecases">Use Cases</Link>
          </li>
        </ul>
      </nav>

      <BellIcon />

      <Routes>
        <Route path="/spa" element={<Home />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function BellIcon() {
  const location = useLocation();

  return (
    <>
    {/* Bell selector should not be visible on About page */}
      {location.pathname !== "/about" && (
        <div className="bell-wrapper">
          <div id="bell-selector">🛎️</div>
        </div>
      )}
    </>
  );
}

export default App;
