import calendarIkon from "../ikons/calendarIkon.svg";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const navigate=useNavigate();


    function onCalendar(event){
      event.preventDefault();
      navigate("/LoggView")
    }

    return (

 <img src={calendarIkon} alt="Calendar"  className="calendar-ikon" onClick={onCalendar}/>
);
}

export default Calendar;