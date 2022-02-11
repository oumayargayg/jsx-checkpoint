
import './App.css';
import sushi from './sushi.jpeg'
function App() {
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titleRed"> JSX checkpoint</h1>
          <br />
          <img className='s1' src="./s1.jpg" alt='' />
          <br />
          <img className='sushi' src={sushi} alt='' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
);
    </div>
  );
}

export default App;
