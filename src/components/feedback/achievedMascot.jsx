import React from "react";
import '../../cssFiles/achivedMascot.css';
import HappyMascot from "../mascot/happyMascot";
import CloseButtonLight from "../buttons/closeButtonLight";

function AchievedMascot ()  {
        return (


<div className="achieved-mascot">
   <div className="achived-box">
    <HappyMascot />

   <p className="achived-text"> Riktigt bra jobbat! Du klarade ditt sömnmål. Fortsätt så! </p>
   </div>
   </div>


        );
    }
    export default AchievedMascot;
