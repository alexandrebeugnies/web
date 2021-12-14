import React from 'react'
import Slideshow from '../Slide';
import './index.css';
import eleonora from '../images/eleonora.jpg'


const Home = () => {
    return (
        <>
           
            <h1 className="home">Su Viaggiu Sardu</h1>
            <p className="introduction">Hello and welcome to our Su Viaggiu Sardu site.<br/>
                We are a travel agency and have created this site to promote
                gourmet tourism in the provinces of Oristano, Ogliastra and Nuoro.<br/>
                Here you will find different tours, events.
                <img className="eleonora" src={eleonora} alt="Eleonora D'Arborea"/>
            </p>
            
            <Slideshow />
            

        </>
    )
}

export default Home;
