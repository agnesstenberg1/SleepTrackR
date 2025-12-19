import React from "react";
import '../../cssFiles/TimeIndicatorSmallerAchieved.css';

    
    function TimeIndicatorSmallerAchieved ({text})  {
        return (


<div className="circular-bar">
    <p className="text-circle"> {text}</p>
</div>



        );
    }
    export default TimeIndicatorSmallerAchieved;