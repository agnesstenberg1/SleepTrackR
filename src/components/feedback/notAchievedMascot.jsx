import React from "react";
import '../../cssFiles/notAchievedMascot.css';
import SadMascot from "../mascot/sadMascot";

function notAchievedMascot ()  {
        return (


<div className="not-achieved-mascot">
   <div className="not-achived-box">
    <SadMascot/>

   <p className="not-achived-text"> Du klarade inte ditt sömnmål idag! Försök lägg dig tidigare ikväll, du klarar detta! </p>
   </div>
   </div>


        );
    }
    export default notAchievedMascot;