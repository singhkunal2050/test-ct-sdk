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
            <NavLinkWithQuery to="/spa">Home</NavLinkWithQuery>
          </li>
          <li>
            <NavLinkWithQuery to="/about">About</NavLinkWithQuery>
          </li>
          <li>
            <NavLinkWithQuery to="/usecases">Use Cases</NavLinkWithQuery>
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

// Component to retain query parameters when navigating
function NavLinkWithQuery({ to, children }) {
  const location = useLocation();
  const queryParams = location.search; // Get current query parameters
  return <Link to={`${to}${queryParams}`}>{children}</Link>;
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