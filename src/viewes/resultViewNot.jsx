import '../cssFiles/resultAchieved.css';
import '../components/feedback/resultAchieved';
import '../cssFiles/views/ResultView.css';
import ResultAchieved from '../components/feedback/resultAchieved';
import LoggTemplate from '../components/templates/loggTemplate';
import ResultNotAchieved from '../components/feedback/resultNotAchieved';

function ResultView() {
  return (
  <div className="result-container">
    <LoggTemplate
    day="Tisdag"
    date="23 November"
    />
    
    <div className='result-achieved'>
    <ResultNotAchieved/>
    </div>
   </div>

  );
}

export default ResultView;