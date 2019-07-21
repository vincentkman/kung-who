import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
    fetch('/rest/login', { 
        method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Authorization': 'Bearer' + response.hg.id_token
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(response)
    })
    .then(response => console.log('from backend', response))
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
