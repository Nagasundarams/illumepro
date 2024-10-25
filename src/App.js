import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from '@fluentui/react';



import './App.css';
import MainContent from './Component/Content';
import Sidebar from './Component/SideBar';
import Header from './Component/Header';
import Cardo from './Component/Card';
import Mainpage from './Component/Skillroom/mainpage';

const App = () => {
  const inputs=[];
  return (
    <Router>
      <div className="app">
        <Header/>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<div><Sidebar/><MainContent formtitle="Add Organization" inputs={inputs}/></div>} />
            <Route path="/about" element={<Mainpage/>} />
            <Route path="/services" element={<div><Sidebar/> <button className='newbutton'>+ Add</button>Services</div>} />
            <Route path="/contact" element={<div> <Sidebar/><button className='newbutton'>+ Add</button>Contact</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
