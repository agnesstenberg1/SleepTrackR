import React from "react";
import "../../cssFiles/TimeIndicatorAchieved.css";
import { useNavigate } from "react-router-dom";


    function TimeIndicatorAchieved ()  {
          const navigate = useNavigate();
const handleClick = () => {
    navigate("/resultView");
  };


        return (
<div>

<div className="circular-bar-big" onClick={handleClick}>
    
            
</div>
</div>



        );
    }
    export default TimeIndicatorAchieved;