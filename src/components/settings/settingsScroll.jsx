import React from "react";
import SettingsBox from "./settingsBox";
import CheckMark from "../ikons/checkmark";
import PlusCircle from "../ikons/plusCircle";
import CheckmarkFilled from "../ikons/checkmarkFilled";
import ControlButton from "../buttons/controlButton";
import Pencil from "../ikons/pencil";

function SettingsScroll() {
  return (
    <div className="settings-scroll">
        <div className="settings-sleep">
        <SettingsBox
        titel="Sömnmål"
        text="8h & 30 min"
        button={ControlButton}
        ikon={Pencil} 
        />
        
        <div className="settings-points">
        <SettingsBox
        titel="Poängsystem"
         button={ControlButton}
        />
        
    <div className="reminders">
        <div className="settings-reminder-1">
        <SettingsBox
        titel="Påminnelser" 
        button={ControlButton}
        />

          <div className="settings-reminder-2">
        <SettingsBox
        text="- Lägg bort mobilen" 
        ikon={Pencil} 
        />

         <div className="settings-reminder-2">
        <SettingsBox
        text="- Lägg bort mobilen" 
        ikon={Pencil} 
        />

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
      
    
  );
}

export default SettingsScroll;