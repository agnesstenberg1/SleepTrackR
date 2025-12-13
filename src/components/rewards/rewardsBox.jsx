import React from "react";
import "../../cssFiles/reward/rewardBox.css";
import CheckMark from "../ikons/checkmark";
import PlusCircle from "../ikons/plusCircle";
import CheckmarkFilled from "../ikons/checkmarkFilled";

function RewardsBox({ titel, points, Ikon }) {
  return (
    <div className="reward-box">
        <div className="reward-text">
            <h3 className="reward-title">{titel}</h3>
                <p className="reward-points">{points}</p>
        </div>
        <div className="reward-ikon">{Ikon && <Ikon/>}
            
            </div>
        </div>
      
    
  );
}

export default RewardsBox;