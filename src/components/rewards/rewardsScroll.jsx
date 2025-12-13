import React from "react";
import "../../cssFiles/reward/rewardsScroll.css";
import CheckMark from "../ikons/checkmark";
import PlusCircle from "../ikons/plusCircle";
import CheckmarkFilled from "../ikons/checkmarkFilled";
import RewardsBox from "./rewardsBox";

function RewardsScroll() {
  return (
    <div className="rewards-scroll">
        <p className="titel-1"> Mina belöningar:</p>
        <div className="rewards-mine">
        <RewardsBox
        titel="Valfri färg design"
        points="100 p"
        Ikon={CheckmarkFilled}
        />

        <RewardsBox
        titel="Valfri färg design"
        points="100 p"
         Ikon={CheckMark}
        />
        </div>

         <p className="titel-2"> Fler belöningar:</p>
        <div className="rewards-new">
        <RewardsBox
        titel="Valfri färg design"
        points="100 p"
         Ikon={PlusCircle}
        />

        <RewardsBox
        titel="Valfri färg design"
        points="100 p"
         Ikon={PlusCircle}
        />

        <RewardsBox
        titel="Valfri färg design"
        points="100 p"
         Ikon={PlusCircle}
        />
        </div>

        </div>
            
        
      
    
  );
}

export default RewardsScroll;