import React from 'react';
import {NavLink} from 'react-router-dom';
import Linje1 from '../img/linje1.jpg';
import Linje2 from '../img/linje2.jpg';
import Linje3 from '../img/linje3.jpg';
import Linje4 from '../img/linje4.jpg';
import Linje5 from '../img/linje5.jpg';
import '../style/linjefag.css';


const Linjefag = () => {

return (
<div className="linjefag">

    <h1>
        LINJEFAG
    </h1>
    <p className="startp">I dine første dage på Den lille højskole bruger vi en del tid på at introducere alle vores
        linjefag og valgfag
        således at du kan få valgt det skema der passer præcis til dig. Via din tilmelding har du allerede givet os en
        pejling på, hvilke linjefag du ønsker at følge, men du vælger altså først definitivt dine fag i løbet af de
        første
        dage på skolen..</p>

    <div className="linjewrap">
        <h2>FOTO</h2>
        <div className="linjebox">
            <img src={Linje1} alt="li"  />
            <p>Fotografi er så meget mere, end at tage
                skarpe billeder.
                Det er en helt anden anden måde at se
                verden på.
                <br />
                <NavLink to="/Foto" title="Foto"><span>Læs mere...</span></NavLink>
            </p>
        </div>
    </div>
    <div className="linjewrap">
        <h2>SANGSKRIVER</h2>
        <div className="linjebox">
            <img src={Linje2} alt="li" />
            <p>Musiker/sangskriver-linjen henvender sig
                til dig som vil være en bedre musiker,
                sangskriver, sanger etc. <br />
                <NavLink to="/Sangskriver" title="Sangskriver"><span>Læs mere...</span></NavLink>
            </p>
        </div>
    </div>
    <div className="linjewrap">
        <h2>E-MUSIK</h2>
        <div className="linjebox">
            <img src={Linje3} alt="li"  />
            <p>Elektronisk musik på Den lille højskole
                giver dig mulighed for at udvikle dine
                evner indenfor musikproduktion <br />
                <NavLink to="/Emusik" title="Emusik"><span>Læs mere...</span></NavLink>
            </p>
        </div>
    </div>
    <div className="linjewrap">
        <h2>DANS</h2>
        <div className="linjebox">
            <img src={Linje4} alt="li" />
            <p>På Dans arbejdes med forskellige
                dansestilarter, og du vil blive udfordret
                fysisk såvel som kreativt. <br />
                <NavLink to="/Dans" title="Dans"><span>Læs mere...</span></NavLink>
            </p>
        </div>
    </div>
    <div className="linjewrap">
        <h2>ADVENTURESPORT</h2>
        <div className="linjebox">
            <img src={Linje5} alt="li" />
            <p>På Den lille højskoles Adventuresport-linje
                bliver du udfordret i discipliner som
                mountainbike, forskellige former for løb <br />
                <NavLink to="/Adventersport" title="Adventersport"><span>Læs mere...</span></NavLink>
            </p>
        </div>
    </div>
</div>
);
}

export default Linjefag;