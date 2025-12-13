import houseIkon from "../ikons/houseIkon.svg";
import { useNavigate } from "react-router-dom";




function House() {
  const navigate=useNavigate();


    function onHouse(event){
      event.preventDefault();
      navigate("/LoggView")
    }

    return (

 <img src={houseIkon} alt="House"  className="house-ikon" onClick={onHouse}/>
);
}

export default House;