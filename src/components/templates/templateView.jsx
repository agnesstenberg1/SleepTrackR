import LogoPic from "../../assets/logoPic.svg";
import "../../cssFiles/template/templateView.css";
import Appheader from "../header/appHeader";



    function TemplateView  ({viewTitle})  {
     

    return (
        <div>
         <Appheader/>
        <div className="template">
             <h2 className="view-title">{viewTitle}</h2> 
        </div>
        </div>
    );
    }

export default TemplateView;