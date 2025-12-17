import Modal from 'react-bootstrap/Modal';
import '../cssFiles/popups/calenderPopup.css';

import SmallButton from '../components/buttons/smallButton';
import TimeIndicatorCalendarAchieved from '../components/timeIndicator/timeIndicatorCalendarAchieved';
import TimeIndicatorCalendarNotAchieved from '../components/timeIndicator/timeIndicatorCalendarNotAchieved';

function CalenderPopup({ show, onClose}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className='form'>
        
        <Modal.Header className='button' closeButton>
        <Modal.Title className='title'>November</Modal.Title>
        </Modal.Header>
        <div className='days'>
        <p>M</p> <p>T</p> <p>O</p> <p>T</p> <p>F</p> <p>L</p> <p>S</p>
        </div>

        <div className='result-days'>
       <TimeIndicatorCalendarAchieved/>
       <TimeIndicatorCalendarAchieved/>
       <TimeIndicatorCalendarAchieved/>
        <TimeIndicatorCalendarNotAchieved/>
     <TimeIndicatorCalendarNotAchieved/>
       <TimeIndicatorCalendarAchieved/>
     <TimeIndicatorCalendarNotAchieved/>
</div>
     
     
      </Modal.Body>
       
    </Modal>
   
  );
}

export default CalenderPopup;