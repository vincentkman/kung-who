import React from 'react';
import GoogleLogin from 'react-google-login';

const failureGoogle = (res) => {
    console.log("Looks like we failed :(, res is: ", res);
}


const responseGoogle = (response) => {
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
    .then(res => console.log('from backend', res));
}

export default function SignIn() {
    return(
            <GoogleLogin
                clientId='447734951530-hs0sfegt10lh27a91mlchvdf3o1fcde1.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                cookiePolicy={'single_host_origin'}
            />
    )
}

