import React from "react";
import './nuoro.css'
import nuoro from '../images/nuoro.jpg'

const Nuoro = () => {
  return (
    <div>
        <img src={nuoro} className="imnuoro"/>
      <p className="textnuoro">
        Nuoro is the Athens of Sardinia, bustling with cultural life since the
        1800s, home to artists like Salvatore and Sebastiano Satta, Francesco
        Ciusa and the author Grazia Deledda, who made the city famous the world
        over. A stroll through the historical centre is a relaxing pastime, a
        step back in time as you walk over ages-old cobblestones along streets
        lined with old stone houses, courtyards, porticos and little squares
        that seem to appear out of nowhere. Among the old quarters is Séuna,
        once home to farmers and craftsmen, and santu Pedru, where shepherds and
        landowners lived. It is here that you will find the Deledda Museum, the
        birthplace of the Nobel prize winner. The house is an homage to the
        memory of this author who opened Sardinia up to the world. She lies at
        rest in the little church della Solitudine at the feet of the Ortobene,
        city’s mountain or, as she defined it, “our soul,” a natural park well
        worth a visit. Corso Garibaldi used to be called Via Majore and has
        always been the social hub of the city, with shops and timeless cafés.
        Have a coffee at one of the outdoor tables there, then stroll about the
        narrow streets and enjoy a meal in one of the many characteristic
        restaurants or trattorias. Not far away is the old delle Grazie church,
        and the majestic Cathedral of Santa Maria della Neve. Next to it is a
        belvedere that leads to the Tribu cultural centre and the Ciusa Museum,
        home to many fascinating sculptures made by Francesco Ciusa, the first
        prize winner of the 1907 Venice Bienniale. The Museo d’Arte di Nuoro
        (MAN) is a short walk away and hosts temporary international exhibitions
        and permanent shows of XX century Sardinian artists. Also not to be
        missed is the Museum of Sardinian Life and Popular Traditions, which
        will give you a taste of material and immaterial culture through
        displays of garments, jewellery, masks, textiles, tools and references
        to traditional singing, religious practices and festivities. Don’t miss
        seeing costumes like these in actual use during the sagra del Redentore
        on the last Sunday of August, featuring folk groups from all over
        Sardinia. The celebrations include a procession of the faithful walking
        from the city to Ortobene, at the top of which, at altitude of about
        1,000m, is the statue of Christ the Redeemer (the Redentore). The 1,600
        hectares of the mountain boasts traces of settlements dating back to
        prehistoric times, like the domus de Janas, as well as an infinity of
        gorgeous scenery, like Sedda Ortai park. Granite rock formations of
        unusual shapes hover interspersed between valleys, the home of a variety
        of mammals and rare birds of prey.
      </p>
      <button className="btntrip">See The Trip</button>
      <button className="btnbuy">Buy</button>
    </div>
  );
};

export default Nuoro;
