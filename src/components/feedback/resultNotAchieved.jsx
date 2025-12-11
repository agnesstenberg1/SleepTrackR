import React from "react";
import NotAchievedMascot from "./notAchievedMascot";
import TimeIndicatorSmallerNotAchieved from "../timeIndicator/timeIndicatorSmallerNotAchieved";
import CloseButtonLight from "../buttons/closeButtonLight";
import "../../cssFiles/resultNotAchieved.css";


    
    function ResultNotAchieved ({onClose})  {
        return (

<div className="wrapper-not">
     <CloseButtonLight onClose={onClose} className="close-button-not"/>
<h1>Resultat:</h1>
 <TimeIndicatorSmallerNotAchieved/>

<p className="current-stats-not">7h & 2min</p> 
 <p className="current-stats-2-not">85p</p>

   
    <NotAchievedMascot/>
   
   
</div>

        );
    }
    export default ResultNotAchieved;
