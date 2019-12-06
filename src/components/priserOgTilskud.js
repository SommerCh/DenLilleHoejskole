import React from 'react';
import Priser from '../img/priser.gif';
import Gulv from '../img/gulv.jpg';
import '../style/priser.css';
const PriserOgTilskud = () => {
return ( 
<div className="priser">
    <img className="pris" src={Priser} alt="p" />
    <img className="gulv" src={Gulv} alt="g"/>
</div> );
}

export default PriserOgTilskud;