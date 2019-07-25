import React from 'react';
import './Map.scss';

function Map(props) {
    // const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const API_KEY = "AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030";
    const mapUrl = `https://www.google.com/maps/embed/v1/search?q=${props.map}&key=${API_KEY}`
    return (
        <div className='Map'>
            <iframe
                title={props.address}
                src= {mapUrl}
                allowFullScreen
            >
            </iframe>
        </div>
    );
}

export default Map;