import React from 'react'
import tapis from '../images/tapis.jpg'
import ceramic from '../images/ceramic.jpg'
import ceramic2 from '../images/Ceramiche-artistiche.jpg'
import knife from '../images/coltello10.jpg'
import knife1 from '../images/couteau.jpg'
import panier from '../images/paniers.jpg'
import './LocalProducts.css'


const Artisan = () => {
    return (
        <div>
            <h1 className="art">Arts and crafts</h1>
            
<h1 className="weaving"> Tessingiu / Weaving </h1>

<p className="descw"> In Mogoro and Samugheo, it is possible to visit many weaving workshops and buy rugs, tablecloths, curtains, blankets, sheets, saddlebags and much more.
The two centers invest a lot in the sector and organize every year, between July and August, the first, the carpet fair, the second, the Sardinian handicraft exhibition - Tessingiu.
With 'a pibiones' techniques (grain or hedgehog style) and flat weaving with visible weft, works are produced that retain both traditional decorations and patterns and offer modern colors and patterns.
In Samugheo you can visit the Regional Museum of Sardinian Weaving Crafts (MURATS)
</p>
<img className="tissage" src={tapis} alt="Sardinian Weaving"/>

<h1 className="ceramic"> Tzeràmica / Ceramic </h1>

<p className="descceramic"> Once famous for the production of ceramic vases, pitchers, dishes and other pots, Oristano, with the artistic productions of its potters, continues to be a "city of ceramics".
Today, artisans transform traditional models into works of art of great value and invent new objects adapted to modern needs.
ceramic </p>
<img src={ceramic} className="ceramic1" alt="Sardinian Ceramic"/>
<img src={ceramic2} className="ceramic2"  alt="Sardinian Ceramic"/>

<h1 className="knif"> Gurteddu / Knives </h1>

<p className="desck"> Sardinian craftsmanship has an important tradition linked to the processing of knives, in particular resorzas, very popular with tourists and whose use is still widespread in Sardinia.
Thanks to the dexterity and the know-how of the craftsmen of Santu Lussurgiu, metals and horns are transformed into knives of exceptional beauty, elegant objects forged in typical models of Santu Lussurgiu. </p>
<img src={knife} className="knif1" alt="Sardinian Knives"/>
<img src={knife1} className="knif2" alt="Sardinian Knives"/>


<h1 className="basket"> Istèrgios de fenu e a intrizu / Baskets </h1>

<p className="descbasket"> This craft activity, mainly at household level, is characterized by different types in different parts of the province.
Besides the products still used daily at home and at work, which reproduce traditional patterns and decorations, the art of basket weaving has also made it possible in recent years to produce a contemporary artistic example.
With the entanglement of reeds, willow, myrtle and mastic, baskets of various sizes are produced, mainly used for transporting fruits and vegetables.
In Flussio and neighboring villages in the north of the province, asphodel stems are used for making baskets and other items.
On spring and summer days, the exhibition of work in front of the craftsmen's houses transforms the streets of these villages into attractive markets.
In San Vero Milis, weaving marsh grasses, you get works artistic features characterized by the presence of red or black. </p>
<img src={panier} className="panier" alt="Sardinian Baskets"/>
        </div>
    )
}

export default Artisan;
