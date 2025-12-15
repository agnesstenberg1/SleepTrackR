import React from "react";
import '../../cssFiles/settings/settingsBox.css';
import ControlButton from "../buttons/controlButton";
import Pencil from "../ikons/pencil";

function SettingsBox({ titel, text, button, ikon }) {
  return (
    <div className="setting-box">
        <div className="setting-text">
            <h3 className="setting-title">{titel}</h3>
                <p className="small-text">{text}</p>
        </div>
        <div className="setting-button">{button && <ControlButton/>}
        <div className="pencil-ikon">{ikon && <Pencil/>}
            </div>
            </div>
        </div>
      
    
  );
}

export default SettingsBox;