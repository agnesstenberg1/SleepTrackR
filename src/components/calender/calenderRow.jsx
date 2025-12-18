import Modal from 'react-bootstrap/Modal';
import '../../cssFiles/popups/calenderPopup.css';
import TimeIndicatorCalendarAchieved from '..//timeIndicator/timeIndicatorCalendarAchieved';
import TimeIndicatorCalendarNotAchieved from '../timeIndicator/timeIndicatorCalendarNotAchieved';


function CalenderRow({ monthName, daysStatus }) {

  const weeks = [];
  for (let i = 0; i < daysStatus.length; i += 7) {
    weeks.push(daysStatus.slice(i, i + 7));
  }

  return (
    <div className="form">
      {monthName && <h3 className="title">{monthName}</h3>}

      {weeks.map((week, weekIndex) => (
        <div className='result-days' key={weekIndex}>
          {week.map((status, dayIndex) => {
            const dayNumber = weekIndex * 7 + dayIndex + 1;
            return status === "achieved"
              ? <TimeIndicatorCalendarAchieved key={dayNumber} text={dayNumber} />
              : <TimeIndicatorCalendarNotAchieved key={dayNumber} text={dayNumber} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default CalenderRow;