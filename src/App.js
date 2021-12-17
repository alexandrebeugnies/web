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
import Oristano from './pages/Oristano';
import Barbagia from './pages/Barbagia';
import Nuoro from './pages/Nuoro';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
init("user_92Sutjf9KoY8tdqHfd0Gu");


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route path='/' exact element={<Home/>} />
        
        <Route path='/Visits'  element={<Visits/>}/>
        <Route path='/Visits/Oristano' element={<Oristano/>}/>
        <Route path='/Visits/Barbagia' element={<Barbagia/>}/>
        <Route path='/Visits/Nuoro' element={<Nuoro/>}/> 
        <Route path='/LocalProducts' element={<LocalProducts/>}/>
        <Route path='/Artisan'  element={<Artisan/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path='/Sports'  element={<Sports/>}/>
        <Route path='/Events'  element={<Events/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Sign-up' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
    
        
        
    
      </Routes>
    </Router>
    
  );
}

export default App;
