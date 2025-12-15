
import SettingsScroll from "../components/settings/settingsScroll";
import TemplateView from "../components/templates/templateView";




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