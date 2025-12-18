import Modal from 'react-bootstrap/Modal';
import '../cssFiles/popups/errorMessagePopup.css';


import SmallButton from '../components/buttons/smallButton';

function ErrorMessagePopup({ show, onClose, onConfirm}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className='form-3'>
        
        <Modal.Header className='button-3'>
        <Modal.Title className='title-3'>Vill du verkligen starta sömnklockan?</Modal.Title>
        </Modal.Header>
        <div className='buttons-3'>
       <SmallButton className="text-1" text="Starta" onClick={onConfirm}/>
       <SmallButton className="text-2" text="Nej, avbryt" onClick={onClose} />
       </div>
     
      </Modal.Body>
       
    </Modal>
   
  );
}

export default ErrorMessagePopup;