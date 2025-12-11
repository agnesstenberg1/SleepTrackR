import React from "react";
import TimeIndicatorAchieved from "./timeIndicatorAchieved";
import LoggButton from "../buttons/loggButton";
import "../../cssFiles/loggButtonTime.css";
    
    function LoggButtonTime ()  {
        return (


<div className="logg-button-time">
    <div className="logg-timer">
        <TimeIndicatorAchieved />
    </div>
    <div className="logg-button-1">
        <div>

   <div className="cirkle">
   <h2 className="text-1"> Avsluta sömn </h2>
   <p className="text-2"> 8h & 45 min</p>
   </div>
   
</div>
    </div>
</div>



        );
    }
    export default LoggButtonTime;