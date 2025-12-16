import React from 'react';
import WeeklyCarousel from '../components/carouselWeekly/carouselWeek';
import WeeklySum from '../components/weeklySummaries/weeklySum';
import TemplateView from "../components/templates/templateView";
import "../cssFiles/views/weeklySummaryView.css";

function WeeklySummaryView({ logs }) {

  const weekData = [
    {
      weekText: "V.48",
      boxText: "Genomsnittlig sömn: 7h 45 min Genomsnittlig poäng: 105 p", 
      goalText: "Sömnmål: 8h & 30 min",
      bottomText: "Du klarade ditt sömnmål 4 av 7 dagar",
      logs: logs,
    },
    {
      weekText: "V.49",
      boxText: "Genomsnittlig sömn: 8h 10 min Genomsnittlig poäng: 105 p",
      goalText: "Sömnmål: 8h & 30 min",
      bottomText: "Du klarade ditt sömnmål 5 av 7 dagar",
      logs: logs,
    },
    {
      weekText: "V.50",
      boxText: "Genomsnittlig sömn: 8h 23 min Genomsnittlig poäng: 105 p",
      goalText: "Sömnmål: 8h & 30 min",
      bottomText: "Du klarade ditt sömnmål 5 av 7 dagar",
      logs: logs,
    },
  ];

  return (
 <div> 
  <TemplateView
  viewTitle="Veckosummering">
  </TemplateView>
  <WeeklyCarousel logsByWeek={weekData} />;
 </div>
  );
}

export default WeeklySummaryView;