import React from 'react'
import LogoFarver from '../img/logoFarve.jpg';
import '../style/kursuscenter.css'

const KursusCenter = () => {
return (
<div className="kursuscenter">
    <h1>KURSUSCENTER</h1>
    <p>
        Den lille højskole ligger central placeret midt imellem Aarhus og Grenaa. Med en bred vifte af faciliteter i
        moderne bygninger og en beliggenhed i yderst attraktive omgivelser midt i Gudenådalen, fremstår Nørgaards
        Højskoles Kursuscenter som et ideelt udgangspunkt for inspiration, læring og samvær. Kursister kan reservere
        egen opholdsstue, hvilket betyder at kursusprocessen fortsætter, når undervisningslokalerne forlades, ligesom
        man er velkommen til at benytte højskolens mange skønne faciliteter og nærliggende rekreative arealer</p>
    
    <h3>INDKVARTERING</h3>
    <p>Den lille højskole Kursuscenter tilbyder særdeles fine overnatningsmuligheder. Vi råder over 105 dobbeltværelser,
        som alle er udstyrede med toilet, bad, wifi, stol, skab og skrivebord.</p>

    <h3>MØDE OG KONFERENCEFACILITETERNE</h3>
    <p>Omfatter grupperum, plenumlokaler, foredragssal samt multisal med plads til op til 350 deltagere samt fuldt
        udstyrede IT-lokaler med internetforbindelse. Vi råder over alt det gængse AV-udstyr heriblandt
        storskærmsprojektorer, OH-projektorer, mikrofoner, højttaleranlæg, DVD, CD mv. Vi dækker jeres behov efter
        aftale.</p>

    <h3>FORPLEJNING</h3>

    <p>Den lille højskole økologiske køkken bærer Fødevarestyrelsens Elite-smiley og lægger vægt på årstidens råvarer,
        sund kost og varieret hverdagsmad. Dagens hovedmåltider serveres som buffet, med et bredt udvalg.</p>

    <p>I prisen for New York-turen er inkluderet fly, fuld forplejning, entréer, transportudgifter i New York etc.</p>
    <div className="velkommen">
        <h4>VELKOMMEN PÅ</h4><img className="lofar" src={LogoFarver} alt="lo" />
    </div>

</div>
);
}

export default KursusCenter;