import React, {useState}from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ScrollTo from "react-scroll-into-view";


const Navbar = () => {
const [showText, setShowText] = useState(false);
const ikon =
<FontAwesomeIcon className="ikon" icon={faSearch} />


return (

<nav className="navbar">


    <ul>

        <div className="dropdown">

            <ScrollTo selector=".langekurser">
                <li className="dropdownli">
                    <NavLink to="/LangeKurser" title="LangeKurser">LangeKurser</NavLink>
                </li>
            </ScrollTo>

            <div className="dropdown-indhold">

                <ScrollTo selector=".priserogtilskud">
                    <NavLink to="/PriserOgTilskud">Priser og tilskud</NavLink>
                </ScrollTo>

                <ScrollTo selector=".linjefag">
                    <NavLink to="/Linjefag">Linjefag</NavLink>
                </ScrollTo>

                <ScrollTo selector=".fejl">
                    <NavLink to="/404"><strong>Link der ikke virker</strong></NavLink>
                </ScrollTo>
            </div>
        </div>
        <div className="dropdown1">

            <ScrollTo selector=".kortekurser">
                <li>
                    <NavLink to="/KorteKurser" title="KorteKurser">KorteKurser</NavLink>
                </li>
            </ScrollTo>

            <div className="dropdown-indhold1">
                <p>Dansk filmhistorie</p>
                <p>Havkajak</p>
                <p>Jagttegn og natur</p>
                <p>Krimi, virkelighed og fiktion</p>
                <p>Ølbrygning</p>
                <p>Mad på dansk</p>
                <p>Kor, sang og musik</p>
                <p>Wellness og Yoga</p>
            </div>
        </div>

    
            <li>
            <ScrollTo selector=".studieture">
                <NavLink to="/Studieture" title="Studieture">Studieture</NavLink>
                </ScrollTo>
            </li>
        

        
            <li>
            <ScrollTo selector=".kursuscenter">
                <NavLink to="/KursusCenter" title="KursusCenter">KursusCenter</NavLink>
                </ScrollTo>
            </li>
       

        
            <li>
            <ScrollTo selector=".home">
                <NavLink to="/OmSkolen" title="Om Skolen">Om Skolen </NavLink>
                </ScrollTo>
            </li>
        
        
        
            <li className="søgewrap">
            <ScrollTo selector=".search">
                <div onClick={()=> setShowText(!showText)}>
                    {ikon}
                </div>
                {showText && <div className="søgefelt"><input placeholder="Søg her..." type="text" />
                    <button onClick={event=> window.location.href='/Search'}>Søg</button>
                </div>}
                </ScrollTo>
            </li>
       

    </ul>
</nav>

);
}

export default Navbar;