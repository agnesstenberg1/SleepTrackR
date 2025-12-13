import React from "react";
import '../../cssFiles/reminder/reminder.css';



function Reminder ({text, Mascot})  {
        return (


<div className="reminder-mascot">
   <div className="reminder-box">
    {Mascot && <Mascot/>}

   <p className="reminder-text"> {text} </p>
   </div>
   </div>


        );
    }
    export default Reminder;
