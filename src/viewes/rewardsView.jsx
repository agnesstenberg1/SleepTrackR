
import RewardsScroll from "../components/rewards/rewardsScroll";
import TemplateView from "../components/templates/templateView";



function RewardsView() {
  return (
    <div className="reward-container">
        <TemplateView
        viewTitle="Belöningar"
        />
        <RewardsScroll/>
        </div>
      
    
  );
}

export default RewardsView;