import pencilIkon from '../../components/ikons/pencilIkon.svg';
import React from "react";
import '../../cssFiles/sleepTextIkon.css';


function SleepTextIkon ({onClick})  {
        return (


<div className="sleep-row" onClick={onClick}>
   <p className="sleep-text"> Sömnmål: 8h & 30 min</p>
<img className="sleep-ikon" src={pencilIkon} alt="pencil icon" />
   </div>



        );
    }
    export default SleepTextIkon;