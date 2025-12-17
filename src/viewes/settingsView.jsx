import { useState } from "react";
import Pencil from "../components/ikons/pencil";
import SettingsScroll from "../components/settings/settingsScroll";
import TemplateView from "../components/templates/templateView";
import SleepGoalPopup from "../popups/sleepgoalPopup";



function SettingsView() {
  return (
    <div className="settings-container">
        <TemplateView
        viewTitle="Inställningar"
        />
        <SettingsScroll/>

  
        </div>
      
    
  );
}

export default SettingsView;