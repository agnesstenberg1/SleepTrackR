
import "../../cssFiles/weeklySummaries/weeklySum.css";
import Diagram from "./diagram";




    function WeeklySum  ({ logs = [], weekText, boxText, goalText, bottomText })  {
     
    return (
        <div className="weekly-sum">
            <div className="week-header">
             <h2 className="week-text"> {weekText}</h2>
        </div>

       <div className="box-weekly">
    <div className="box-text">{boxText}</div>
        </div>
        
        

    
        <p className="goal-text">{goalText}</p>

<div className="diagram-wrapper">
  <div className="diagram">
       <Diagram logs={logs}/>
    </div>
        </div>

        <div>
       <p className="bottom-text">{bottomText}</p>
       </div>
       </div>
   
    );
    }

export default WeeklySum;