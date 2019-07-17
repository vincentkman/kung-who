import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Trainers from './frontend/Components/Profiles/Trainers';
import TrainerInfo from './frontend/Components/TrainerInfo/TrainerInfo';
import NotFound from './frontend/Components/Not-Found/Not-Found';
import LandingPage from './frontend/Components/LandingPage/LandingPage';
import Navbar from './frontend/Components/Navbar/Navbar.js';
import Footer from './frontend/Components/Footer/Footer.js';
// import Home from './frontend/pages/Home/Home.js';

import './App.scss';


class App extends React.Component {

  render() {
    return (
      <Router>
        <LandingPage />
        <Navbar />
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Trainers} />
            <Route exact path='/Not-Found' component={NotFound} />
            <Route exact path='/:trainerId' component={TrainerInfo} />
          </Switch>
        </div>
        <Footer/>
      </Router>
    );
  }
}

export default App;
