import React from 'react';
import './Map.scss';

function Map(props) {
    const api = "AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030";
    const mapUrl = `https://www.google.com/maps/embed/v1/search?q=${props.map}&key=${api}`
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