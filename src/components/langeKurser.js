import React from 'react'
import {Link} from 'react-router-dom';
import Check from '../img/check.png';
import '../style/langekurser.css';


const LangeKurser = () => {
  
return (

<div className="langekurser">
    <h1>LANGE KURSER – FORLØB</h1>

    <h3>KOMMENDE ELEVHOLD</h3>
    <ul className="ulhome">
        <li className="lihome">
            <Link to="/Tilmelding">Efterårs-semester 2019, 18. august til 14. december 2019, 17
            uger</Link>
        </li>
        <li className="lihome">
            <Link to="/Tilmelding">Efterårs-semester 2019, 15. september til 14. december 2019, 13
            uger</Link>
        </li>
        <li className="lihome">
            <Link to="/Tilmelding">Forårs-semester 2020, 19. januar til 13. juni 2020, 21 uger
            </Link>
        </li>
        <li className="lihome">
            <Link to="/Tilmelding">Forårs-semester 2020, 23. februar til 13. juni 2020, 16 uger
            </Link>
        </li>
    </ul>
    

    <h3>De første dage på højskolen</h3>
    <p>I dine første dage på Den lille højskole bruger vi tiden på at introducere alle vores linjefag og valgfag,
        således at du kan få valgt det skema, der passer præcis til dig. Via din tilmelding har du allerede markeret et
        uforpligtende valg af linjefag, men du vælger altså først definitivt dine fag i løbet af de første dage på
        skolen. Den almindelige skema-undervisning starter herefter onsdag eftermiddag.</p>

    <p> Sociale aktiviteter fylder meget i introugen, hvor vi gør rigtigt meget ud af at du hurtigt lærer dine nye
        højskole-kammerater godt at kende. Intro-ugen afsluttes altid med et brag af en fredags-fest, hvor du bl.a. vil
        opleve Nørgaards forrygende lærerband.</p>

    <h3>Indkvartering</h3>
    <p> Man indkvarteres på dobbeltværelse og får således en room-mate på sit højskoleophold. Ønsker man enkelt-værelse
        kan det imødekommes, men det koster ekstra (se menupunkt om priser & tilskud). Bemærk at vi har ganske få
        enkeltværelser til rådighed.</p>

    <h3>Almindeligt skema
    </h3>
    <p> Efter en tætpakket introuge, som har fået dig til at føle dig hjemme på højskolen, går de følgende uger med
        almindelig skemaundervisning via de mange spændende fag du har valgt. Hvis du har fortrudt nogle af dine valg
        ser vi gerne at du hurtigst muligt snakker med dine lærere om evt. at skifte.</p>

    <h3>Filmskuespil</h3>

    <p> Vælger du Filmskuespil skal du i løbet af dit ophold møde en række professionelle gæstelærere fra branchen
        (castere, instruktører m.fl.). Der er i den forbindelse en samlet merbetaling på 2.000 kr. hvis du vælger
        Filmskuespil.</p>

    <h3>Storby-studieture</h3>
    <p> Som elev på Den lille højskole kan du vælge mellem to studieture i løbet af dit ophold, nemlig Berlin eller New
        York. Berlin-turen er allerede betalt via tilmeldingsgebyret, men du har mulighed for at “opgradere” til en New
        York-tur mod en merbetaling på 8.500 kr. Begge ture er alt inklusive undtaget lommepenge.</p>
        <button onClick={event =>  window.location.href='/tilmelding'}
 className="tilmeldsub" type="submit"> <img className="check" src={Check} alt="ck" />Tilmeld dig her</button>
</div>

);
}

export default LangeKurser;