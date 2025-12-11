import settingsIkon from "../ikons/settingsIkon.svg";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate=useNavigate();


    function onSettings(event){
      event.preventDefault();
      navigate("/SettingsView")
    }

    return (

 <img src={settingsIkon} alt="Settings"  className="settings-ikon" onClick={onSettings}/>
);
}

export default Settings;