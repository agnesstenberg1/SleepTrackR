import CloseButton from 'react-bootstrap/CloseButton';

function CloseButtonLight({onClick}) {
  return (
    <div className="close-button-area close-button" onClick={onClick} data-bs-theme="dark">
      <CloseButton />
     
    </div>
  );
}

export default CloseButtonLight;