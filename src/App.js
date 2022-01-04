import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Data from './components/Data';
import PreCautions from './components/PreCautions';
import Map from './mapComp/Map';
import Blog from '../src/blog/Blog';
import ContactUs from './components/ContactUs';
import Login from './components/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Data />
                <Map />
                <PreCautions />
              </div>
            }
          ></Route>
          <Route path="/Blog" element={<Blog />} />
          <Route
            isAuth={isAuth}
            path="/Login"
            element={<Login setIsAuth={setIsAuth} />}
          />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
