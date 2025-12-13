import '../cssFiles/views/loggView.css';
import '../components/buttons/loggButton';
import LoggButton from '../components/buttons/loggButton';
import Appheader from '../components/header/appHeader';
import HappyMascot from '../components/mascot/happyMascot';
import BottomMenu from '../components/menu/bottomMenu';
import SleepTextIkon from '../components/information/sleepTextIkon';

function LoggView() {
  return (
  <div className="logg-container">
    <Appheader/>

    <div className='text-logg'>
    <h3>Måndag</h3>
    <h3>22 November</h3>
    </div>

<div className='text-button'>
    <div className='user-text'>
      <HappyMascot/>
    <h3>Godkväll Oskar</h3>
    </div>

    <LoggButton/>
  
   <BottomMenu/>
   <SleepTextIkon/>
    </div>
   </div>

  );
}

export default LoggView;