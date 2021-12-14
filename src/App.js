import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Visits from './pages/Visits';
import LocalProducts from './pages/LocalProducts';
import Food from './pages/Food'
import Artisan from './pages/Artisan';
import Sports from './pages/Sports';
import Events from './pages/Events';
import Contact from './pages/Contact';

import{ init } from 'emailjs-com';
init("user_92Sutjf9KoY8tdqHfd0Gu");


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route path='/' exact element={<Home/>} />
        
        <Route path='/Visits'  element={<Visits/>}/>
        <Route path='/LocalProducts' element={<LocalProducts/>}/>
        <Route path='/Artisan'  element={<Artisan/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path='/Sports'  element={<Sports/>}/>
        <Route path='/Events'  element={<Events/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    
      </Routes>
    </Router>
    
  );
}

export default App;
