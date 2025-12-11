import rewardsIkon from "../ikons/rewardsIkon.svg";
import { useNavigate } from "react-router-dom";

function Rewards() {
  const navigate=useNavigate();


    function onRewards(event){
      event.preventDefault();
      navigate("/RewardsView")
    }

    return (

 <img src={rewardsIkon} alt="Rewards"  className="rewards-ikon" onClick={onRewards}/>
);
}

export default Rewards;