import Modal from 'react-bootstrap/Modal';

import CalenderRow from '../components/calender/calenderRow';
import SmallButton from '../components/buttons/smallButton';
import TimeIndicatorCalendarAchieved from '../components/timeIndicator/timeIndicatorCalendarAchieved';
import TimeIndicatorCalendarNotAchieved from '../components/timeIndicator/timeIndicatorCalendarNotAchieved';

//lösa krysset så de inte ligger över och har vitbakgrund
function CalenderPopup({ show, onClose}) { //ändra så alla classname har "" och inte ''- ändra så allt är samma överallt i alla saker 
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="form">
     
     <div className='days-button'>
      <Modal.Header className="header-button" closeButton >   
       
      </Modal.Header>

       
                <div className='days'>
          <p className='monday'>M</p> 
          <p className='tuesday'>T</p> 
          <p className='wednesday'>O</p> 
          <p className='thursday'>T</p> 
          <p className='friday'>F</p> 
          <p className='saturday'>L</p> 
          <p className='sunday'>S</p>
        </div>

        </div>


      <CalenderRow 
          monthName="November"
  daysStatus={[
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","notAchieved",
    "achieved","notAchieved","achieved","notAchieved","achieved","notAchieved","achieved",
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","notAchieved",
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","achieved"
  ]}
        />


      <CalenderRow 
          monthName="December"
  daysStatus={[
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","notAchieved",
    "achieved","notAchieved","achieved","notAchieved","achieved","notAchieved","achieved",
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","notAchieved",
    "achieved","achieved","notAchieved","achieved","notAchieved","achieved","achieved"
  ]}
        />
       
      </Modal.Body>
       
    </Modal>
   
  );
}

export default CalenderPopup;