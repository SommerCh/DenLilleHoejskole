import React from 'react';
import '../style/footer.css';
import Ikon from '../img/facebook.png'



const Footer = () => {

return (

<div className="footer">
    <div className="adr">
        <p><strong>Den lille højskole</strong></p>
        <p>Mindevej 19</p>
        <p>8543 Hornslet</p>
        <p>Danmark</p><br/>
        <p>+45 77 34 77 12</p>
        <p>+45 77 34 77 12</p>
        <p>info@dlhoejskole.dk</p>
        <p>www.dlhoejskole.dk</p>
       <img className="facebook" src={Ikon} alt="facebook"/>
    </div>
    <form className="form" action="info@dlhoejskole.dk">
        <p><strong>Spørg os</strong></p>
        <input type="text" value="Navn..."/>
        <input type="text" value="Email..."/>
        <textarea  cols="50" rows="10" value="Besked...">
        </textarea><br/>
        <button className="formbutton" type="submit">Send</button>
    </form>

</div>
);
}

export default Footer ;