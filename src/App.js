import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Data from './components/Data';
import PreCautions from './components/PreCautions';
import Map from './mapComp/Map';
import Blog from '../src/blog/Blog';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import BlogPost from './blog/BlogPost';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

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
                <h1 className="blog-home-header">Blog</h1>
                <BlogPost />
              </div>
            }
          ></Route>
          <Route path="/Blog" element={<Blog isAuth={isAuth} />} />
          <Route
            isAuth={isAuth}
            path="/Login"
            element={<Login setIsAuth={setIsAuth} />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogpost" element={<BlogPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
