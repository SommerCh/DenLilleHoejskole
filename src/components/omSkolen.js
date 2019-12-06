import React from 'react';
import {Link} from 'react-router-dom';
import Check from '../img/check.png';
import '../style/home.css';



const Home = () => {
return (
<div className="home">
    <h1>VELKOMMEN TIL DEN LILLE HØJSKOLE</h1>

    <p>Den lille Højskole er højskolen med linjefag i foto, sangskriver, musik, E-musik, filmskuespil, dans, kunst,
        adventuresport og friluftsliv.</p><br />
    <p>Den lille Højskole tilbyder lange højskoleophold fra 13 og op til 21 uger, og tager på storbystudieture til
        Berlin og New York på alle ophold.</p><br />

    <p>Vi giver dig mulighed for at dyrke dine interesser, og opdage helt nye sider af dig selv gennem fag du måske slet
        ikke vidste du brændte for!
        Hos os vil dit højskoleophold først og fremmest være drevet af din lyst til at dyrke det du holder af, og vi
        lover dig høj faglighed i alle de fag vi tilbyder.
    </p><br />
    <p>Vi tager imod dig med fantastiske rammer såvel inde som ude, et meget bredt fagudbud og ikke mindst et ungt og
        dedikeret lærerteam, som glæder sig til at møde dig og lære dig at kende.</p>

    <h2>KOMMENDE ELEVHOLD</h2>
    <ul className="ulhome">
        <li className="lihome">
            <Link to="/LangeKurser" title="LangeKurser">Efterårs-semester 2019, 18. august til 14. december 2019, 17
            uger</Link>
        </li>
        <li className="lihome">
            <Link to="/LangeKurser" title="LangeKurser">Efterårs-semester 2019, 15. september til 14. december 2019, 13
            uger</Link>
        </li>
        <li className="lihome">
            <Link to="/LangeKurser" title="LangeKurser">Forårs-semester 2020, 19. januar til 13. juni 2020, 21 uger
            </Link>
        </li>
        <li className="lihome">
            <Link to="/LangeKurser" title="LangeKurser">Forårs-semester 2020, 23. februar til 13. juni 2020, 16 uger
            </Link>
        </li>
    </ul>
    <button className="tilmeldsub" type="submit"> <img className="check" src={Check} alt="ck"/>Tilmeld dig her</button>
</div>
);
}

export default Home;