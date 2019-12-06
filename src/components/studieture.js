import React from 'react';
import '../style/studieture.css';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.jpg';
import Img4 from '../img/img4.jpg';
import Img5 from '../img/img5.jpg';
import Img6 from '../img/img6.jpg';


const Studieture = () => {
return (
<div className="studieture">
    <h1>STUDIETURE</h1>
    <p>
        I løbet af et semester på Den lille højskole har du mulighed for at komme med på to storby-studieture hhv. til
        Berlin og New York. Berlin-turen er den obligatoriske tur for alle elever, mens New York-turen er et ekstra
        tilbud, som skal tilkøbes, og som gennemføres i umiddelbar forlængelse af opholdet. Det koster ekstra 10.000 kr.
        at komme med på New York-turen, som man uforpligtende markerer sin interesse i når man tilmelder sig et ophold
        på Den lille højskole (via afkrydsning på on line-tilmeldingsskemaet). Først når man er startet på højskolen
        afkræves man en bindende tilmelding til turen.</p>

    <h3>Berlin</h3>
    <p>
        Studieturen til Berlin byder på 5 dage i den stærkt oplevelsesmættede tyske hovedstad. Du får set de sædvanlige
        turist must-sees, men vil også opleve nogle af Berlins knap så turistede attraktioner samt en stor dosis
        kultur-leben. Endelig får du masser af tid til at cruise rundt i Berlin på egen hånd.
        Vi kører i bus fra højskolen tur/retur og er i Berlin fra mandag til fredag.</p>

    <h3>New York</h3>
    <p>
        I modsætning til Berlin-turen, som bærer præg af at være en fælles studietur for hele den samlede gruppe,
        adskiller New York-turen sig ved også at tilbyde eleverne nogle linjefags-relaterede oplevelser. Disse kunne
        være skuespiller-workshop for filmskuespillerne, danse-workshop for danserne, fotoekskursion for foto-eleverne
        etc. Derudover ser man naturligvis en række af de seværdigheder man bare bør se, når man er i New York.
        I prisen for New York-turen er inkluderet fly, fuld forplejning, entréer, transportudgifter i New York etc.</p>

    <div className="galleri">
        <div>
            <img src={Img1} alt="im" />
            <img src={Img2} alt="im" />
            <img src={Img3} alt="im" />
        </div>
        <div>
            <img src={Img4} alt="im" />
            <img src={Img5} alt="im" />
            <img src={Img6} alt="im" />
        </div>

    </div>
</div>


);
}

export default Studieture;