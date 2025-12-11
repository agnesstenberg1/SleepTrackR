import navToPrevious from "../buttons/navToPrevious.svg";
import { useNavigate } from "react-router-dom";
import "../../cssFiles/navPre.css";



    function NavPre ()  {
        const navigate=useNavigate();

        function handlePre(){
            navigate("/prePage"); //byt sen till rätt route 
        }

        return (


 <img src={navToPrevious} alt="NavPre"  className="navPre" onClick={handlePre} />
    );
    }

export default NavPre;