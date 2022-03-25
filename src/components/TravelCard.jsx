import BlackBtn from './BlackBtn';

const data = {
  para: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
};

function TravelCard(props) {
  // console.log('props ===', props);
  return (
    <div className='travel-card'>
      <img className='travel-image' src={props.image} alt='town' />
      <div className='travel-info'>
        <h3>{props.title}</h3>
        <p className='date'>{props.date}</p>
        <p>{data.para}</p>
        <BlackBtn />
      </div>
    </div>
  );
}

export default TravelCard;
