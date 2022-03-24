import cameraMan from '../assets/1.jpg';

function MyImage() {
  return (
    <figure className='card'>
      <figcaption>Photo 1</figcaption>
      <img src={cameraMan} alt='of stuff' />
    </figure>
  );
}

export default MyImage;
