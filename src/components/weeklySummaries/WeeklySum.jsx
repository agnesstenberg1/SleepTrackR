import NavNext from "../buttons/navNext";
import NavPre from "../buttons/navPre";
import "../../cssFiles/weeklySummaries/weeklySum.css";





    function WeeklySum  ({weekText, boxText, goalText })  {
     
//lägg in diagrammet sen i denna komponent 
    return (
        <div className="weekly-sum">
        <div className="nav-arrows">
        <NavPre />
         <div className="week-text"> {weekText}</div>
        <NavNext/>
        </div>

       <div className="box-weekly">
    <div className="box-text">{boxText}</div>
        </div>
        
       <div className="goal-text">{goalText}</div>
        </div>
    );
    }

export default WeeklySum;