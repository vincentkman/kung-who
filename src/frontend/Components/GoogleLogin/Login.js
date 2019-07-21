import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default function SignIn() {
    return(
            <GoogleLogin
                clientId='447734951530-efse9vaggts4cqivag0s0rl5ato5qdoh.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    )
}