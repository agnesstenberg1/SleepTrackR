import navToNext from "../buttons/navToNext.svg";
import { useNavigate } from "react-router-dom";
import "../../cssFiles/navNext.css";



    function NavNext ()  {
        const navigate=useNavigate();

        function handleNext(){
            navigate("/nextPage"); //byt sen till rätt route 
        }

        return (


 <img src={navToNext} alt="NavNext"  className="navNext" onClick={handleNext} />
    );
    }

export default NavNext;