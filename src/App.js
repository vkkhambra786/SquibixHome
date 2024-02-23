// // App.js

import React from 'react';
import { BrowserRouter as Router, Route,   Routes,Navigate ,Link} from 'react-router-dom';
 import { useState } from 'react';
import AdminTool from './components/Admin';
import "./App.css"
import HomePage from './components/HomePage';
 
const App = () => {
  const [homepageData, setHomepageData] =useState({
    title: '',
    description: '',
    imageUrl: '',
    sliderHeading:'',
    slidercontent:'',
    sliderUrl:'',
    welcome:'',
    welcome_cont:'',
  prod_dev:'',
  prod_cont:'',
  whatwe:'',
  cloudaws:'',
  cloudcont:'',
  blovkcont:'',
  blockchain:'',
  mobiledev:'',
  mobilecont:'',
  webdev:'',
  webcont:''
    // Initialize other properties as needed
  });

  const updateHomepageData = (newData) => {
    localStorage.setItem('homepageData', JSON.stringify(newData));
    setHomepageData(newData);
  };
  return (
    <Router>
      <div>
        <nav className='navbar'>

        <ul className="navbar-list">
            
            <li className="navbar-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/admin">Admin</Link>
            </li>
            
            
          </ul>
        </nav>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminTool  updateHomepageData={updateHomepageData}  homepageData={homepageData}/>} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
 
 
  