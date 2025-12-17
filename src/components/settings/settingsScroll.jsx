import React from "react";
import { useState } from "react";
import SettingsBox from "./settingsBox";
import CheckMark from "../ikons/checkmark";
import PlusCircle from "../ikons/plusCircle";
import CheckmarkFilled from "../ikons/checkmarkFilled";
import ControlButton from "../buttons/controlButton";
import Pencil from "../ikons/pencil";
import '../../cssFiles/settings/SettingsScroll.css';
import SleepTextIkon from "../information/sleepTextIkon";
import NavNext from "../buttons/navNext";
import SleepGoalPopup from "../../popups/sleepgoalPopup";
import EditReminderPopup from "../../popups/editReminderPopup";
import EditReminder2Popup from "../../popups/editReminder2Popup";
import NewReminderPopup from "../../popups/newReminderPopup";

function SettingsScroll() {
   const [showPopup, setShowPopup] = useState(false);
   const [showEditReminderPopup, setShowEditReminderPopup] = useState(false);
  const [showEditReminder2Popup, setShowEditReminder2Popup] = useState(false);
  const [showNewReminderPopup, setShowNewReminderPopup] = useState(false);

   return (
    <div className="settings-scroll">
      <div className="box-sleep">
        <div className="box-left">
        <h3 className="title-sleep">Sömnmål</h3>
                <>
      <SleepTextIkon onClick={() => setShowPopup(true)} />

      <SleepGoalPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>

        </div>
        <div className="box-right">
        <ControlButton/>
        </div>
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
        ikon={<Pencil onClick={() => setShowEditReminderPopup(true)} />}
        />
      </div>

       <EditReminderPopup
        show={showEditReminderPopup}
        onClose={() => setShowEditReminderPopup(false)}
      />

         <div className="settings-reminder-3">
        <SettingsBox
        text="- Lägg bort mobilen" 
         ikon={<Pencil onClick={() => setShowEditReminder2Popup(true)} />}
        />
        </div>
      
  
      <EditReminder2Popup
        show={showEditReminder2Popup}
        onClose={() => setShowEditReminder2Popup(false)}
      />
     
          <p className="add-text"  onClick={() => setShowNewReminderPopup(true)}> + Lägg till påminnelse</p>
      </div>

       <NewReminderPopup
        show={showNewReminderPopup}
        onClose={() => setShowNewReminderPopup(false)}
      />
        
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