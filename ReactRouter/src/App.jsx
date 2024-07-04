import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import Notfound from './components/Notfound';
import Mainheader from './components/Mainheader';

function App() {
  return (
    <>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
              }
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/labs"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
              }
            >
              Labs
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
      {/* Parent route */}
        <Route path="/" element={<Mainheader/>}>
        {/* New Route Default Route  */}
        <Route index element={<Home />} />
        {/* child route this is nested routing */}
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Notfound />} />
        </Route>
          
        
        
      </Routes>
    </>
  );
}

export default App;
