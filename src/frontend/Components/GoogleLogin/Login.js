import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

export default function SignIn() {
    return(
            <GoogleLogin
                clientId='447734951530-hs0sfegt10lh27a91mlchvdf3o1fcde1.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    )
}