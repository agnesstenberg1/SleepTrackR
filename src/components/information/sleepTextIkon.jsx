import pencilIkon from '../../components/ikons/pencilIkon.svg';
import React from "react";
import '../../cssFiles/sleepTextIkon.css';


function SleepTextIkon ()  {
        return (


<div className="sleep-row">
   <p className="sleep-text"> Sömnmål: 8h & 30 min</p>
<img className="sleep-ikon" src={pencilIkon} alt="pencil icon" />
   </div>



        );
    }
    export default SleepTextIkon;