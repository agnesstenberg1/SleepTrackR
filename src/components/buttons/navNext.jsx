import navToNext from "../buttons/navToNext.svg";
import { useNavigate } from "react-router-dom";
import "../../cssFiles/navNext.css";



    function NavNext ()  {
        

        function handleNext(){
           
        }

        return (


 <img src={navToNext} alt="NavNext"  className="navNext" onClick={handleNext} />
    );
    }

export default NavNext;