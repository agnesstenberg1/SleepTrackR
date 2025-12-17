import Form from 'react-bootstrap/Form';
import SmallButton from '../buttons/smallButton';
import "../../cssFiles/forms/form.css";

function Form1({h3Label, textLabel, dateLabel, placeholder, timeValue, buttonText, onClose}) {
  return (
    <div className="form-box">
    <Form>
      <h3>{h3Label}</h3>
      <Form.Group className="form-group-1">
        <Form.Label className='form-text'>{textLabel}</Form.Label>
        <Form.Control type="text" placeholder={placeholder} />
      </Form.Group>

      <Form.Group className="form-group-2">
        <Form.Label className='form-text'>{dateLabel}</Form.Label>
        <Form.Control type="time"  defaultValue={"22:00"} />
      </Form.Group>
    </Form>
    <div className='button-form'>
     <SmallButton text={buttonText} onClick={onClose}/>
     </div>
   </div>
  );
}

export default Form1;