import TravelCard from './TravelCard';
import './TravelList.css';

function TravelList() {
  return (
    <div className='travel'>
      <div className='container grid'>
        <TravelCard title='New York' image='img/newyork.jpg' date='Fri 27 Nov 2016' />
        <TravelCard title='Paris' image='img/paris.jpg' date='Fri 20 Nov 2019' />
        <TravelCard title='San Francisco' image='img/sanfran.jpg' date='Fri 17 Nov 2020' />
      </div>
    </div>
  );
}

export default TravelList;
