import React from 'react';
import { Link } from 'react-router-dom';

export default function TrainerCover(props) {
    let url = require(`../../common/images/profile-img/${props.id}.jpg`);
    return (
        <Link to={`/${props.id}`} className='profile-item'>
            <h2 className='name'>{props.firstname} {props.lastname}</h2>
            <img
                src={url}
                alt={props.lastname}
                className='profile-img'
            />
        </Link>
    );
}