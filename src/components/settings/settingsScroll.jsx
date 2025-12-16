import React from "react";
import SettingsBox from "./settingsBox";
import CheckMark from "../ikons/checkmark";
import PlusCircle from "../ikons/plusCircle";
import CheckmarkFilled from "../ikons/checkmarkFilled";
import ControlButton from "../buttons/controlButton";
import Pencil from "../ikons/pencil";
import '../../cssFiles/settings/SettingsScroll.css';
import SleepTextIkon from "../information/sleepTextIkon";
import NavNext from "../buttons/navNext";

function SettingsScroll() {
  return (
    <div className="settings-scroll">
      <div className="box-sleep">
        <SettingsBox
        titel="Sömnmål: 8h & 30 min"
        ikon={Pencil}
        button={ControlButton}
        />
        </div>
        
        <div className="settings-points">
        <SettingsBox
        titel="Poängsystem"
         button={ControlButton}
        />
        </div>

    <div className="reminders">
        <div className="settings-reminder-1">
        <SettingsBox
        titel="Påminnelser" 
        button={ControlButton}
        />
</div>
          <div className="settings-reminder-2">
        <SettingsBox
        text="- Läggdags" 
        ikon={Pencil} 
        />
 </div>
         <div className="settings-reminder-3">
        <SettingsBox
        text="- Lägg bort mobilen" 
        ikon={Pencil} 
        />
          </div>
          <p className="add-text"> + Lägg till påminnelse</p>
      </div>
        
        <div className="sync">
        <SettingsBox
        titel="Synka med smartklocka" 
       
        />
       </div>

       <div className="about">
        <SettingsBox
        titel="Om appen" 
       
        />
        </div>
        </div>
    
  );
}

export default SettingsScroll;