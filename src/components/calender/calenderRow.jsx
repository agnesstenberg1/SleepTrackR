import Modal from 'react-bootstrap/Modal';
import '../../cssFiles/popups/calenderPopup.css';
import TimeIndicatorCalendarAchieved from '..//timeIndicator/timeIndicatorCalendarAchieved';
import TimeIndicatorCalendarNotAchieved from '../timeIndicator/timeIndicatorCalendarNotAchieved';
import { useState } from "react";
import DailyOverviewPopup from '../../popups/dailyOverviewPopup';

function CalenderRow({ monthName }) {
    
    const daysStatus = [
{ status: "achieved", sleep: "8h & 45min", score: 90 },
{ status: "notAchieved", sleep: "6h & 15min", score: 50 },
{ status: "achieved", sleep: "9h & 0min", score: 95 },
{ status: "notAchieved", sleep: "7h & 30min", score: 45 },
{ status: "achieved", sleep: "8h & 50min", score: 88 },
{ status: "notAchieved", sleep: "6h & 0min", score: 40 },
{ status: "achieved", sleep: "9h & 15min", score: 92 },
{ status: "notAchieved", sleep: "5h & 45min", score: 35 },
{ status: "achieved", sleep: "8h & 35min", score: 87 },
{ status: "notAchieved", sleep: "7h & 0min", score: 55 },
{ status: "achieved", sleep: "9h & 10min", score: 93 },
{ status: "notAchieved", sleep: "6h & 20min", score: 48 },
{ status: "achieved", sleep: "8h & 40min", score: 89 },
{ status: "notAchieved", sleep: "6h & 10min", score: 42 },
{ status: "achieved", sleep: "9h & 5min", score: 94 },
{ status: "notAchieved", sleep: "5h & 50min", score: 38 },
{ status: "achieved", sleep: "8h & 55min", score: 90 },
{ status: "notAchieved", sleep: "7h & 15min", score: 46 },
{ status: "achieved", sleep: "9h & 0min", score: 91 },
{ status: "notAchieved", sleep: "6h & 30min", score: 44 },
{ status: "achieved", sleep: "8h & 50min", score: 88 },
{ status: "notAchieved", sleep: "6h & 0min", score: 40 },
{ status: "achieved", sleep: "9h & 10min", score: 92 },
{ status: "notAchieved", sleep: "5h & 45min", score: 35 },
{ status: "achieved", sleep: "8h & 35min", score: 87 },
{ status: "notAchieved", sleep: "7h & 0min", score: 55 },
{ status: "notAchieved", sleep: "7h & 0min", score: 55 },
{ status: "notAchieved", sleep: "5h & 0min", score: 45 },
  ];
  
    const [showPopup, setShowPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedSleep, setSelectedSleep] = useState(null);
  const [selectedScore, setSelectedScore] = useState(null);

 const handleDayClick = (dayNumber, dayData) => {
  setSelectedDay(dayNumber);
      setSelectedStatus(dayData.status);
    setSelectedSleep(dayData.sleep);
    setSelectedScore(dayData.score);
  setShowPopup(true);
};


  const weeks = [];
  for (let i = 0; i < daysStatus.length; i += 7) {
    weeks.push(daysStatus.slice(i, i + 7));
  }

  return (
    <div className="form">
      {monthName && <h3 className="title">{monthName}</h3>}

      {weeks.map((week, weekIndex) => (
        <div className='result-days' key={weekIndex}>
          {week.map((dayData, dayIndex) => {
            const dayNumber = weekIndex * 7 + dayIndex + 1;

             const DayComponent =
              dayData.status === "achieved"
                ? TimeIndicatorCalendarAchieved
                : TimeIndicatorCalendarNotAchieved;

            return (
              <div
                key={dayNumber}
                onClick={() => handleDayClick(dayNumber, dayData)}
              >
                <DayComponent text={dayNumber} />
              </div>
            );
          })}
        </div>
      ))}
<DailyOverviewPopup
  show={showPopup}
  onClose={() => setShowPopup(false)}
  day={selectedDay}
  month={monthName}
  status={selectedStatus}
  sleep={selectedSleep}
   score={selectedScore}
/>

  
    </div>
  );
}

export default CalenderRow;