import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import '../../../frontend/Components/LandingPage/LandingPage.scss';
import Logo from '../../../frontend/Components/common/images/kungwhologo.png';
import SignIn from '../../../frontend/Components/GoogleLogin/Login.js';
import '../../../frontend/Components/GoogleLogin/Login.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <SignIn /><br></br>
                    <Link to='/' id='link home' className='home navbar-item'>Home</Link>
                    <Link to='/' id='link' className='navbar-item'> <img className='Header-logo' alt='logo' src={Logo}></img></Link>
                    {/* <Link to='/contact' id='link' className='navbar-item'>Contact</Link> */}
                </div>
            </div>
        );
    }
}

export default Navbar;