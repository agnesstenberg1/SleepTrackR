import LogoPic from "../../assets/logoPic.svg";
import "../../cssFiles/template/templateView.css";
import Appheader from "../header/appHeader";
import BottomMenu from "../menu/bottomMenu";



    function TemplateView  ({viewTitle})  {
     

    return (
        <div>
         <Appheader/>
        <div className="template">
             <h2 className="view-title">{viewTitle}</h2> 
        </div>
        <BottomMenu/>
        </div>
    );
    }

export default TemplateView;