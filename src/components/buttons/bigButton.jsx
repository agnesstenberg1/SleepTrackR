import Button from 'react-bootstrap/Button';
import "../../cssFiles/buttons/bigButton.css";

function BigButton({text, onClick}) {
   

  return (
    
      <Button className="big-button" variant="primary" onClick={onClick}>
        {text}
      </Button>
    
  );
}

export default BigButton;