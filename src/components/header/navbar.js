import React, {useState}from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
const [showText, setShowText] = useState(false);
const ikon =
<FontAwesomeIcon className="ikon" icon={faSearch} />

return (

<nav className="navbar">
    <ul>
        <div className="dropdown">
            <li className="dropdownli">
                <NavLink to="/LangeKurser" title="LangeKurser">LangeKurser</NavLink>
            </li>
            <div className="dropdown-indhold">
                <NavLink to="/PriserOgTilskud">Priser og tilskud</NavLink>
                <NavLink to="/Linjefag">Linjefag</NavLink>
                <NavLink to="/404"><strong>Link der ikke virker</strong></NavLink>


            </div>
        </div>
        <div className="dropdown1">
            <li>
                <NavLink to="/KorteKurser" title="KorteKurser">KorteKurser</NavLink>
            </li>
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
            <NavLink to="/Studieture" title="Studieture">Studieture</NavLink>
        </li>
        <li>
            <NavLink to="/KursusCenter" title="KursusCenter">KursusCenter</NavLink>
        </li>
        <li>
            <NavLink to="/OmSkolen" title="Om Skolen">Om Skolen </NavLink>
        </li>
        <li className="søgewrap">
            <div onClick={()=> setShowText(!showText)}>
                {ikon}
            </div>
            {showText && <div className="søgefelt"><input placeholder="Søg her..." type="text" />
                <button onClick={event =>  window.location.href='/Search'}>Søg</button>
            </div>}
        </li>

    </ul>
</nav>

);
}

export default Navbar;