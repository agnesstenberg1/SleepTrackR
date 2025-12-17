import '../../cssFiles/views/loggView.css';  
import Appheader from '../header/appHeader';
import HappyMascot from '../mascot/happyMascot';
import BottomMenu from '../menu/bottomMenu';
import Calendar from '../ikons/calendar';
import CalenderPopup from '../../popups/calenderPopup';
import { useState } from "react";

function LoggTemplate({day, date}) {
     const [showCalenderPopup, setShowCalenderPopup] = useState(false);
  return (
    <div className="logg-container">
      <Appheader />

      <div className='text-calendar'>
        <div className='text-logg'>
          <h3>{day}</h3>
          <h3>{date}</h3>
        </div>

                <div className='calender-ikon'> 
      <Calendar onClick={() => setShowCalenderPopup(true)} /> 
      </div>
      <>
      <CalenderPopup
        show={showCalenderPopup}
        onClose={() => setShowCalenderPopup(false)}
      />
    </>
    
      </div>

      <div className='text-button'>
        <div className='user-text'>
          <HappyMascot />
          <h3>Godkväll Oskar</h3>
        </div>
      </div>

      <BottomMenu />
    </div>
  );
}

export default LoggTemplate;