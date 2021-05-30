import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Components/HeaderComponent.js';
import Navbar from './Components/NavbarComponent.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';

function App() {
  return (
    <div className="App">
      
      {/* This is for introducing Body Border in the HomePage */}
                   <div id="left"></div>
                   <div id="right"></div>
                   <div id="top"></div>
                   <div id="right"></div>
      {/*-----------------Ends Here---------------------------*/}
      
    <Router>
        <Header />
        <Navbar />

      <Switch>
         <Route path="/">
             <Home />
         </Route>

        <Route path="/about">
             <About />
        </Route>
      </Switch>
    </Router>

    </div>
 );
}

export default App;
