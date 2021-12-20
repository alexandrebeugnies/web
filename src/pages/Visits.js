import React from "react";
import "./visits.css";
import oristano from '../images/Oristano.jpg'
import barbagia from '../images/barbagia.jpg'
import nuoro from '../images/nuoro.jpg'
import './Barbagia'
import './Nuoro'
import './Oristano'
import Oristano from "./Oristano";
import Barbagia from "./Barbagia";
import Nuoro from "./Nuoro";
import { Link } from "react-router-dom";
const Visits = () => {
    return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={oristano} className="ori" alt="Oristano Gulf" />
          </div>
          <div className="flip-card-back">
            <h1 className="Oristano">Oristano Gulf</h1>
            <p className="descori">The Oristano Gulf is a deep inlet on the western coast of Sardinia: two towers, Marceddì to the South and 
                                   Torre Grande to the North, stand as guards of the Gulf and its territory pervaded by historical events.</p>
        </div>
        </div>
    </div>

      <div className="card-action">
      <Link to="./Oristano">See More</Link>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={barbagia} className="barb" alt="Barbagia" />
          </div>
          <div className="flip-card-back">
            <h1 className="barbagia">Barbagia</h1>
            <p className="descbarb">The heart of Sardinia, a complementary alternative to the marvels of the sea and chic lifestyle of the coast: 
            small towns, warm hospitality, wholesome food, ancient traditions and timeless culture.</p>
        </div>
        </div>
    </div>

      <div class="card-action">
        <Link to="./Barbagia">See More</Link>
      </div>

     
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={nuoro} className="nuo" alt="Nuoro" />
          </div>
          <div class="flip-card-back">
            <h1 className="nuoro">Nuoro</h1>
            <p className="descnuo">The Barbagia region’s most populous town is steeped in tradition and culture, home to museums and 
            art set in charming and beautifully preserved historical quarters.</p>
        </div>
        </div>
    </div>

      <div class="card-action">
        <Link to="./Nuoro">See More</Link>
      </div>
</div>
   
 
    );


};

export default Visits;