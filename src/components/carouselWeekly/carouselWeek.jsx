import Carousel from 'react-bootstrap/Carousel';
import WeeklySum from '../weeklySummaries/weeklySum';

function CarouselWeek({ logsByWeek }) {
  return (
    <div className='carousel-container'>
    <Carousel interval={null} wrap={false} indicators={false}>
      
      {logsByWeek.map((week, index) => (
        <Carousel.Item key={index}>
          <WeeklySum
            logs={week.logs}
            weekText={week.weekText}
            boxText={week.boxText}
            goalText={week.goalText}
            bottomText={week.bottomText}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default CarouselWeek;