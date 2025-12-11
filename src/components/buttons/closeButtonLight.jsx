import CloseButton from 'react-bootstrap/CloseButton';

function CloseButtonLight({onClose, className}) {
  return (
    <div className="close-button-area close-button" onClick={onClose} data-bs-theme="dark">
      <CloseButton />
     
    </div>
  );
}

export default CloseButtonLight;