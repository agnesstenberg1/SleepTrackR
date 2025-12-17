import Button from 'react-bootstrap/Button';
import "../../cssFiles/buttons/bigButton.css";

function BigButton({text, onClick}) {
   

  return (
    
      <Button className="big-button" onClick={onClick}>
        {text}
      </Button>
    
  );
}

export default BigButton;