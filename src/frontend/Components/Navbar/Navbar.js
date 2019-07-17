import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import '../../../frontend/Components/LandingPage/LandingPage.scss';
import Logo from '../../../frontend/Components/common/images/logo2.jpg';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/' id='link' className='navbar-item'>Home</Link>
                    <img className='Header-logo' alt='logo' src={Logo}></img>
                    {/* <Link to='/javascript' className='navbar-item'>JavaScript</Link>
                    <Link to='/react' className='navbar-item'>React</Link>
                    <Link to='/css' className='navbar-item'>CSS</Link> */}
                    <Link to='/contact' id='link' className='navbar-item'>Contact</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;