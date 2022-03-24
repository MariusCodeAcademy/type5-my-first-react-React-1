import TravelCard from './TravelCard';
import './TravelList.css';

function TravelList() {
  return (
    <div className='travel'>
      <div className='container grid'>
        <TravelCard />
      </div>
    </div>
  );
}

export default TravelList;
