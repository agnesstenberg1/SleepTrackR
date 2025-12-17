import Modal from 'react-bootstrap/Modal';
import Form2 from '../components/forms/form2';
import '../cssFiles/forms/form.css';
import SmallButton from '../components/buttons/smallButton';

function EditReminderPopup({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className='form'>
        
        <Modal.Header className='button' closeButton>
        <Modal.Title className='title'>Ändra påminnelse</Modal.Title>
        </Modal.Header>
        <Form2
          placeholder="Läggdags"
          timeValue="22:00"
          buttonText="Spara"
          onClose={onClose} 
        />
     
      </Modal.Body>
       
    </Modal>
   
  );
}

export default EditReminderPopup;