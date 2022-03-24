import './App.css';
import ImageList from './components/ImageList';
import MainHeading from './components/MainHeading';
import SubTitle from './components/SubTitle';
import MainText from './components/MainText';

function App() {
  return (
    <div className='App container'>
      <MainHeading />
      <SubTitle />
      <MainText />
      <ImageList />
    </div>
  );
}

export default App;
