import React from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = { Name: '' }
        this.responseGoogle = this.responseGoogle.bind(this)
        this.failureGoogle = this.failureGoogle.bind(this)
        this.logout = this.logout.bind(this)
    }

    responseGoogle = (response) => {
        console.log("Google's response is: ", response);
        // console.log(response.tokenId);
        // console.log("JSON.stringify gives us: ", JSON.stringify(response));
        fetch('/rest/login', {
            method: 'POST',
            // mode: 'no-cors', 
            // cache: 'no-cache', 
            // credentials: 'same-origin', 
            headers: {
                'Authorization': 'Bearer ' + response.tokenId
            },
            // redirect: 'follow',
            // referrer: 'no-referrer',
            // body: JSON.stringify(response)
        })
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(res => {
                console.log('from backend', res);
                console.log(`A part of our token: ${res.decodedToken.family_name}, ${res.decodedToken.given_name}`);
                this.setState({ Name: `${res.decodedToken.given_name} ${res.decodedToken.family_name}` }, () => console.log(this.state.Name))
            });
    }

    failureGoogle = (res) => {
        console.log("Looks like we failed :(, res is: ", res);
    }

    logout() {
        this.setState({ Name: '' })
    }

    render() {
        return (
            <div className='navbar-item-google-in'>
                <p>{this.state.Name}</p>
                {this.state.Name ?
                    <GoogleLogout className='navbar-item-google-out'
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                    >
                    </GoogleLogout> : <GoogleLogin
                        clientId='447734951530-hs0sfegt10lh27a91mlchvdf3o1fcde1.apps.googleusercontent.com'
                        buttonText='Login'
                        onSuccess={this.responseGoogle}
                        onFailure={this.failureGoogle}
                        cookiePolicy={'single_host_origin'}
                    />}
            </div>
        );
    }

}

