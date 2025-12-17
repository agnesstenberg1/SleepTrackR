import calendarIkon from "../ikons/calendarIkon.svg";


function Calendar({onClick}) {

    return (

 <img src={calendarIkon} alt="Calendar"  className="calendar-ikon" onClick={onClick}/>
);
}

export default Calendar;