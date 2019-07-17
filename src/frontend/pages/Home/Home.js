import React from 'react';
// import Content from '../../components/content/content';
// import Trainer from '../../Components/Profiles/Trainers.js'
//import TrainerInfo from '/Users/vincentman/Desktop/the-cerulean-project/src/frontend/Components/TrainerInfo/TrainerInfo.js';
// import Map from '../../pages/Home/Map.js';
import './Home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className='Home'>
                <iframe 
                title='Bermondsey'
                width="350" height="350" 
                frameBorder="0" 
                src="https://www.google.com/maps/embed/v1/search?q=bermondsey&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030" 
                allowFullScreen></iframe>
            </div>
        )
    }
}

export default Home;