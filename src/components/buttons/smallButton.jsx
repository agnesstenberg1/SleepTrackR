import Button from 'react-bootstrap/Button';
import "../../cssFiles/buttons/smallButton.css";

function SmallButton({text, onClick}) {
   

  return (
    
      <Button className="small-button" variant="primary" onClick={onClick}>
        {text}
      </Button>
    
  );
}

export default SmallButton;