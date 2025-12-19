import Modal from 'react-bootstrap/Modal';
import "../cssFiles/popups/DailyOverviewPopup.css";
import TimeIndicatorSmallerAchieved from '../components/timeIndicator/timeIndicatorSmallerAchieved';
import TimeIndicatorNotOverview from '../components/timeIndicator/timeIndicatorNotOverview';

function DailyOverviewPopup({ show, onClose, day, month, status, sleep, score }) {
  if (!show) return null; //ändra så alla classname har "" och inte ''- ändra så allt är samma överallt i alla saker 

      return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="form-overview">

        <div className="form-container">

          <Modal.Header className='close-button' closeButton />

          <h3 className="title-overview">
            {month} {day}
          </h3>

          <div className="indicators">
            {status === "achieved" ? (
              <TimeIndicatorSmallerAchieved
               text={
                <>
                <div className='text-sleep'> {sleep}</div>
                <div className='score-sleep'> Poäng: {score}</div>
                </>
               }
               />
            ) : (
              <TimeIndicatorNotOverview
                   text={
                <>
                <div className='text-sleep'> {sleep}</div>
                <div className='score-sleep'> Poäng: {score}</div>
                </>
               }
               />
            )}
          </div>

        </div>

      </Modal.Body>
    </Modal>
  );
}



export default DailyOverviewPopup;