import '../cssFiles/views/loggView.css';
import '../components/buttons/loggButton';
import LoggButton from '../components/buttons/loggButton';
import Appheader from '../components/header/appHeader';
import HappyMascot from '../components/mascot/happyMascot';
import BottomMenu from '../components/menu/bottomMenu';
import SleepTextIkon from '../components/information/sleepTextIkon';
import Calendar from '../components/ikons/calendar';
import TimeIndicatorAchieved from '../components/timeIndicator/timeIndicatorAchieved';
import { useState } from "react";
import LoggButtonTime from '../components/timeIndicator/loggButtonTime';
import LoggButtonNotTime from '../components/timeIndicator/loggButtonTimeNot';
import SleepGoalPopup from '../popups/sleepgoalPopup';
import CalenderPopup from '../popups/calenderPopup';

function LoggViewAchieved({addLog}) {
  const [showTimer, setShowTimer] = useState(false); //ska loggknappen vara en timer?
   const [showPopup, setShowPopup] = useState(false);
   const [showCalenderPopup, setShowCalenderPopup] = useState(false);


  return (
//byt ut detta mot loggtemplate
  <div className="logg-container">
    <Appheader/>

<div className='text-calendar'> 
    <div className='text-logg'>
    <h3>Måndag</h3>
    <h3>22 November</h3>
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
      <HappyMascot/>
    <h3>Godkväll Oskar</h3>
    </div>

 <div>
      {!showTimer ? (
        <LoggButton
          text="Starta sömn"
          onClick={() => setShowTimer(true)}
        />
      ) : (
        <LoggButtonTime />
      )}
    </div>

        <>
      <SleepTextIkon onClick={() => setShowPopup(true)} />

      <SleepGoalPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>

  
   <BottomMenu/>
   
    </div>
   </div>

  );
}

export default LoggViewAchieved;