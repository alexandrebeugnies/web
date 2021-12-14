import React from "react";
import { Slide } from 'react-slideshow-image'
import img from './images/cala-brandinchi.jpg'
import img1 from './images/Porto-istana.jpg'
import img2 from './images/cala-goloritze.jpg'
import img3 from './images/spiaggia-del-Principe.jpg'
import img4 from './images/spiaggia-di-tuerredda.jpg'
import img5 from './images/spiaggia-domus-de-maria-chia.jpg'
import img6 from './images/spiaggia-la-pelosa-stintino.jpg'
import img7 from './images/spiaggia-porto-giunco.jpg'
import img8 from './images/spiaggia-punta-molentis.jpg'
import img9 from './images/spiaggia-santa-giusta.jpg'

import './Slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite:true,
    arrows:true,
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img} alt="Cala Brandichi"/>
                    </div>
                </div>
                
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="Porto Istana"/>
                    </div>
                </div>   
                
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="Cala Goloritze"/>
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <img src={img4} alt="Spiaggia Del principe"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img5} alt="Spiaggia Di Tuerreda"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img6} alt="Spiaggia Domus De Maria"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img7} alt="Spiaggia La Pelosa Stintino"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img8} alt="Porto Giunco"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img9} alt="Punta Molentis"/>
                    </div>
                </div>   

                <div className="each-slide">
                    <div>
                        <img src={img3} alt="Santa Giusta Costa Del Rei"/>
                    </div>
                </div>           
            </Slide>
        </div>
    )
} 

export default Slideshow; 