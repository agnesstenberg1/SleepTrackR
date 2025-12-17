import Modal from 'react-bootstrap/Modal';
import Form1 from '../components/forms/form1';
import '../cssFiles/forms/form.css';
import SmallButton from '../components/buttons/smallButton';

function SleepGoalPopup({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className='form'>
        
        <Modal.Header className='button' closeButton>
        <Modal.Title className='title'>Sömnmål</Modal.Title>
        </Modal.Header>
        <Form1
          h3Label="Sömnmål"
          dateLabel="Ändra tid"
          placeholder="8h 30 min"
          buttonText="Spara" 
          onClose={onClose} 
        />
     
      </Modal.Body>
       
    </Modal>
   
  );
}

export default SleepGoalPopup;