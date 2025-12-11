import overviewIkon from "../ikons/overviewIkon.svg";
import { useNavigate } from "react-router-dom";

function Overview() {
  const navigate=useNavigate();


    function onOverview(event){
      event.preventDefault();
      navigate("/weeklySummaryView")
    }

    return (

 <img src={overviewIkon} alt="Overwiev"  className="overview-ikon" onClick={onOverview}/>
);
}

export default Overview;