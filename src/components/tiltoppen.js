import React from 'react';
import ScrollTo from "react-scroll-into-view";

const TilToppen = () => {
    return ( 
            <ScrollTo selector=".navbar">
        <div className="op">Til toppen</div>
    </ScrollTo>
     );
}
 
export default TilToppen;