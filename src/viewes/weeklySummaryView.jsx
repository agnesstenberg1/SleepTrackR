import React from "react";
import WeeklySum from "../components/weeklySummaries/weeklySum";
import BottomMenu from "../components/menu/bottomMenu";
import TemplateView from "../components/templates/templateView";
import "../cssFiles/views/weeklySummaryView.css";

function WeeklySummaryView({ logs }) {
  return (
<div>
    <TemplateView
    viewTitle="Veckosummering"
    />
    
    <div className="weekly-container">
      <WeeklySum
        logs={logs}
        weekText="V.50"
        boxText="Genomsnittlig sömn: 8h 23 min
        Genomsnittlig poäng: 105 p"
        goalText="Sömnmål: 8h & 30 min"
        bottomText="Du klarade ditt sömnmål 5 av 7 dagar "
      />
    </div>
    </div>
  );
}

export default WeeklySummaryView;
