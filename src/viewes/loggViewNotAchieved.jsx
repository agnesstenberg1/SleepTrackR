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


function LoggViewNotAchieved({addLog}) {
  const [showTimer, setShowTimer] = useState(false);

  return (

  <div className="logg-container">
    <Appheader/>

<div className='text-calendar'>
    <div className='text-logg'>
    <h3>Tisdag</h3>
    <h3>23 November</h3>
    </div>

    <div className='calender-ikon'> 
      <Calendar/> </div>
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
        <LoggButtonNotTime />
      )}
    </div>

  
   <BottomMenu/>
   <SleepTextIkon/>
    </div>
   </div>

  );
}

export default LoggViewNotAchieved;