import React from 'react';
import { Link } from 'react-router-dom';

import './TrainerCover.scss';

export default function TrainerCover(props) {
    let url = require(`../../common/images/profile-img/${props.id}.jpg`);
    return (
        <Link to={`/${props.id}`} className='profile-item'>
            <img
                src={url}
                alt={props.lastname}
                className='profile-img profile-keyframe'
            />
            <div className='profile-item-details'>
                <h2 className='profile-item-details-title title profile-keyframe'>{props.type}</h2>
                <h3 className='profile-item-details-sub-title title profile-keyframe'>{props.firstname} {props.lastname}</h3>
                <h3 className='profile-item-details-sub-title title profile-keyframe'>£{props.rate}/hour</h3>
                <h3 className='profile-item-details-sub-title title profile-keyframe'>{props.address}</h3>
            </div>
        </Link>
    );
}