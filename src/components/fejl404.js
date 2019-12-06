import React from 'react';
import '../style/fejl404.css';
import Fejl from '../img/404.gif';

const Fejl404 = () => {
    return ( <div className="fejl">
        <h1 className="fejlh1">Siden findes desværre ikke</h1>
        <img src={Fejl} alt="fejl"/>
        </div>
     );
}
 
export default Fejl404;