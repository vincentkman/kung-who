import React from 'react';
import GitHub from './links-icons/GitHub.png';
import Facebook from './links-icons/Facebook.png';
import Instagram from './links-icons/Instagram.png';
import MeetUp from './links-icons/MeetUp.png';

import './Footer.scss';

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer id='footer' className='Footer'>
                    <div className='Footer-container'>
                        <div className='Footer-item'><img className='Footer-logo' alt='github' src={GitHub}></img></div>
                        <div className='Footer-item'><img alt='facebook' src={Facebook} /></div>
                        <div className='Footer-item'><img alt='ig' src={Instagram} /></div>
                        <div className='Footer-item'><img alt='meetup' src={MeetUp} /></div>
                    </div>
                </footer>
            </div>
        );
    }
}

// GitHub
// Facebook
// Instagram
// Kodiri
// MeetUp