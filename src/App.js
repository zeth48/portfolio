import './App.scss';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      
      {/* This is for introducing Body Border in the HomePage */}
                   <div id="left"></div>
                   <div id="right"></div>
                   <div id="top"></div>
                   <div id="right"></div>
      {/*-----------------Ends Here---------------------------*/}
      
      <Header />
    </div>
  );
}

export default App;