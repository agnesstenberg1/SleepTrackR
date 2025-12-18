import React from "react";
import NotAchievedMascot from "./notAchievedMascot";
import TimeIndicatorSmallerNotAchieved from "../timeIndicator/timeIndicatorSmallerNotAchieved";
import CloseButtonLight from "../buttons/closeButtonLight";
import "../../cssFiles/resultNotAchieved.css";
import { useNavigate } from "react-router-dom";

    
    function ResultNotAchieved ()  {
                const navigate = useNavigate();

         const handleClose = () => {
    navigate("/loggViewAchieved");
  };
        return (


<div className="wrapper-not">
     <CloseButtonLight onClick={handleClose} className="close-button-not"/>
<h1>Resultat:</h1>
 <TimeIndicatorSmallerNotAchieved/>

<p className="current-stats-not">7h & 2min</p> 
 <p className="current-stats-2-not">85p</p>

   
    <NotAchievedMascot/>
   
   
</div>

        );
    }
    export default ResultNotAchieved;
