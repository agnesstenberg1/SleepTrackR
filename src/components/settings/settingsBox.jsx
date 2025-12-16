import React from "react";
import '../../cssFiles/settings/settingsBox.css';
import ControlButton from "../buttons/controlButton";
import Pencil from "../ikons/pencil";
import SleepTextIkon from "../information/sleepTextIkon";

function SettingsBox({ titel, text, button, ikon, }) {
  const IkonComponent =ikon;
  return (
    <div className="setting-box">
        <div className="setting-text">
            <h3 className="setting-title">{titel}</h3>
                <p className="small-text">{text}</p>
        </div>
        <div className="button-ikon-container">
        <div className="setting-button">{button && <ControlButton/>}
        <div className="ikon">{ikon && <IkonComponent/>}
            </div>
            </div>
            </div>
        </div>
      
    
  );
}

export default SettingsBox;