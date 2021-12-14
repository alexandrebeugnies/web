import React from 'react'
import bike from '../images/BIKE.jpg'
import horse from '../images/CAVALLO.jpg'
import climbing from '../images/CLIMBING.jpg'
import diving from '../images/DIVING.jpg'
import golf from '../images/GOLF.jpg'
import motocross from '../images/MOTOCROSS.jpg'
import surf from '../images/SURF.jpg'
import fishing from '../images/PESCA.jpg'
import trekking from '../images/TREKKING.jpg'
import './sport.css'

const Sports = () => {
    return (
        <div>
            
<h1 className="diving"> Diving </h1>

<p className="descdiv"> Scuba diving: Diving trips to marvelous sites, near the coast or in the open sea, will make you discover the multicolored underwater environment, rich in wrecks from various eras.
<img src={diving} className="div" alt="diving photo"/> </p>

<h1 className="surf"> Surfing / windsurfing / kitesurfing </h1>

<p className="descs"> Capo Mannu's spot has been called "the Hawaii of the Mediterranean".
Located a few kilometers from Hotel la Baja and Camping Nurapolis, it offers the possibility of practicing these three types of water sports to play with the wind and the waves.
</p>
<img src={surf} className="surfing" alt="surf photo"/> 

<h1 className="bike"> Bikes </h1>

<p className="descbik"> Numerous courses and paths that wind their way literally skimming the coast or plunging into the magnificent mountain landscapes.
 </p>
<img src={bike} className="bici" alt="Biciclette"/> 

<h1 className="climbing"> Climbing </h1>

<p className="desccli"> The province of Oristano is known to climbing enthusiasts for its variety of types of walls to practice.
Not far from the hotel and the campsite, near the archaeological excavations of Cornus from the 6th century BC, there are several climbing routes.
Here is what Maurizio Oviglia, one of the leading experts in climbing in Sardinia, writes on the Planet Mountain website: "The region of Santa Caterina di Pittinuri is already known for the beauty of the beaches, it is less so. because of the small basalt cliffs, hidden in the folds of Monti Ferru.
They are not, as I said, large obvious cliffs, but small ridges hidden in the ravines, offering an intensive climb that rarely reaches 20 to 25 meters.
So it makes sense that local climbers often associate rock climbing with bouldering.
Indeed, the two cliffs that we offer each have, in addition to the cliff, their climbing area. “Currently, 49 routes are available in two sectors with a large majority of scores between 5 and 6. </p>
<img src={climbing} className="climb" alt="climbing photo"/> 

<h1 className="golf"> Golf </h1>

<p className="descg"> An 18-hole golf course (par 72) is a few kilometers from the hotel and the campsite.
The course was designed by renowned American architects Von Hagge, Smelek and Baril, who introduced the 18 holes in the natural dunes that characterize the area, creating one of the most spectacular courses in Europe, both from the point of view technique than from a landscape point of view.
golf photo </p>
<img src={golf} className="golf1" alt="golf photo"/> 

<h1 className="fishing"> Fishing </h1>

<p className="descfi"> In this part of the province of Oristano, it is possible to fish in all its variants thanks to the presence of marine heritage and fishing cooperatives.
On the long beach of Is Arenas, practically the beach of Camping Nurapolis, we practice surf casting and the beach often organizes regional and national competitions.
Various companies in the sector offer the possibility of sea fishing, an exciting experience.
On board the local fishing boats, participate in their traditional fishing and passing beautiful bays and islets, you can taste local dishes made with fresh fish. </p>
<img src={fishing} className="fishing1" alt="fishing photo"/> 

<h1 className="trekking"> Trekking </h1>

<p className="desct"> If you like hiking or Nordic walking, you've come to the right place.
Between sea and mountain, dozens of trails and paths will make you discover the most beautiful corners of our territory.
Winding paths along the sea to beaches and coves that are otherwise difficult to access.
Trails, usually made by animals, lead you to an altitude of 1050 meters, where you can admire breathtaking landscapes after passing through thick old-growth forests where it is not uncommon to meet bighorn sheep. and wild boars. </p>
<img src={trekking} className="trek" alt="trekking photo"/> 

<h1 className="horse"> Horse riding </h1>

<p className="desch"> The province of Oristano has a long tradition of horse breeding, hence the abundance of rides that organize walks, breeder's fairs, and above all parties and races where riders can show their pride and courage.
Riding along the ponds where the flamingos live is a unique experience.</p>
<img src={horse} className="cavallo" alt="horse riding photo"/> 

<h1 className="motocross"> Motocross </h1>

<p className="descmo"> A motocross track is located a stone's throw from the hotel and the campsite in the dunes of the ancient desert of Is Arenas, which was the largest sand desert in Europe until the mid-1950s .
The course is unique, technical and exciting and the climate is ideal in all seasons. Even in the rainy season, the sandy bottom provides excellent drainage.
Many teams, national and international, frequent this track which they find exceptional </p>
<img src={motocross} className="moto" alt="motocross photo"/> 

        </div>
    )
}

export default Sports;
