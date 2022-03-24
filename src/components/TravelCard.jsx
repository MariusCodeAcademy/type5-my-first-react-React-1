import BlackBtn from './BlackBtn';

const data = {
  image: 'img/newyork.jpg',
  title: 'New York',
  date: 'Fri 27 Nov 2016',
  para: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
};

function TravelCard() {
  return (
    <div className='travel-card'>
      <img className='travel-image' src={data.image} alt='town' />
      <div className='travel-info'>
        <h3>{data.title}</h3>
        <p className='date'>{data.date}</p>
        <p>{data.para}</p>
        <BlackBtn />
      </div>
    </div>
  );
}

export default TravelCard;
