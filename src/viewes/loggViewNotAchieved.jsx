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
import ErrorMessagePopup from '../popups/errorMessagePopup';
import CalenderPopup from '../popups/calenderPopup';

function LoggViewNotAchieved({addLog}) {
  const [sleepStarted, setSleepStarted] = useState(false); //ska loggknappen vara en timer?
 const [showPopup, setShowPopup] = useState(false);
 const [showCalenderPopup, setShowCalenderPopup] = useState(false);
 const [showErrorMessagePopup, setShowErrorMessagePopup] = useState(false);
const handleConfirmStart = () => {
  setShowErrorMessagePopup(false);
  setSleepStarted(true);
};
  return (
//byt ut detta mot loggtemplate
  <div className="logg-container">
    <Appheader/>

<div className='text-calendar'>
    <div className='text-logg'>
    <h3>Tisdag</h3>
    <h3>23 November</h3>
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
      {!sleepStarted ? (
        <LoggButton
          text="Starta sömn"
          onClick={() => setShowErrorMessagePopup(true)}
          />
  ) : (
    <LoggButtonNotTime />
  )}
      </div>

          <>
      <ErrorMessagePopup
        show={showErrorMessagePopup}
        onClose={() => setShowErrorMessagePopup(false)}
        onConfirm={handleConfirmStart}
      />
    </>
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

export default LoggViewNotAchieved;