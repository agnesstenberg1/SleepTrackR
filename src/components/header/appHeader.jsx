import LogoPic from "../../assets/logoPic.svg";
import "../../cssFiles/header/appHeader.css";




    function Appheader  ()  {
     

    return (
        <div className="header">
            
             <img className="logo" src={LogoPic} alt="logo" />
             <h1 className="titel">SleepTrackR</h1>
        </div>
    );
    }

export default Appheader;