import React from "react";
import AchievedMascot from "./achievedMascot";
import TimeIndicatorSmallerAchieved from "../timeIndicator/timeIndicatorSmallerAchieved";
import CloseButtonLight from "../buttons/closeButtonLight";
import "../../cssFiles/resultAchieved.css";
import { useNavigate } from "react-router-dom";

    
    function ResultAchieved ()  {
        const navigate = useNavigate();

         const handleClose = () => {
    navigate("/loggViewNotAchieved");
  };
        return (

<div className="wrapper">
    <CloseButtonLight onClick={handleClose} className="close-button"/>
<h1>Resultat:</h1>

 <TimeIndicatorSmallerAchieved/>

<p className="current-stats">8h & 49min</p> 
 <p className="current-stats-2">120p</p>

  
    <AchievedMascot/>
   
   
</div>

        );
    }
    export default ResultAchieved;
