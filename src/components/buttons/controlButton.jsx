import Form from 'react-bootstrap/Form';
import { useState } from "react";

function ControlButton() {
  const [checked, setChecked] = useState(false)

  const handleClick=()=>{
    setChecked(!checked);
  };
  
  return (
    <div className="switch-click-area" onClick={handleClick}>
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)} //behövs rad 11,12,5 och 1? Hjälper detta så den stannar i de läge användaren väljer? 
      />
     
    </Form>
  </div>
  );
}

export default ControlButton;