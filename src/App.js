import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Data from './components/Data';
import PreCautions from './components/PreCautions';
import Map from './mapComp/Map';
import Blog from '../src/blog/Blog';
function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">blog</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Hero />
                <Data />
                <Map />
                <PreCautions />
              </div>
            }
          ></Route>
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
