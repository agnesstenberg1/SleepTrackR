import React from "react";
import TimeIndicatorNotAchieved from "./timeIndicatorNotAchieved";
import LoggButton from "../buttons/loggButton";
import "../../cssFiles/loggButtonTime.css";
import { useNavigate } from "react-router-dom";
    
    function LoggButtonTime ()  {
                  const navigate = useNavigate();
const handleClick = () => {
    navigate("/resultViewNot");
  };
        return (


<div className="logg-button-time">
    <div className="logg-timer ">
        <TimeIndicatorNotAchieved />
    </div>
    <div className="logg-button-1" onClick={handleClick}>
        <div>

   <div className="cirkle">
   <h2 className="text-1"> Avsluta sömn </h2>
   <p className="text-2"> 6h & 45 min</p>
   </div>
   
</div>
    </div>
</div>



        );
    }
    export default LoggButtonTime;