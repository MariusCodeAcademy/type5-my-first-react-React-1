import './App.css';
import cameraMan from './assets/1.jpg';
import MyImage from './componets/MyImage';

const mainTitle = 'THE BAND!!!';
const subTitle = 'We love music';
const mainText =
  'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function MainHeading() {
  return <h1>{mainTitle}</h1>;
}

function SubTitle() {
  return <p className='subtitle'>{subTitle}</p>;
}

function MainText() {
  return <p className='text'>{mainText}</p>;
}
// const MainTextArrow = () => <p className='text'>{mainText}</p>;

function App() {
  // comentaras

  return (
    <div className='App container'>
      <MainHeading />
      <SubTitle />
      <MainText />
      <div className='grid'>
        <MyImage />
        <MyImage />
        <MyImage />
      </div>
    </div>
  );
}

export default App;
