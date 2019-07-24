import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading'
import Map from '../../Components/Map/Map';

import Dashboard from '../../Components/Dashboard/Dashboard';
import Store from '../../Components/Store/Store';

import '../../Components/Loading/Loading.scss';
import './TrainerInfo.scss';

export default class TrainerInfo extends React.Component {

    constructor() {
        super();
        this.state = { trainer: {} };
    }

    componentDidMount() {
        let trainerId = this.props.match.params.trainerId;
        fetch(`/rest/profiles/${trainerId}`)
            .then(res => res.json())
            .then(trainer => this.setState({ trainer }))
            .catch(error => console.log(error));
    }

    render() {
        let trainer = this.state.trainer;

        if (trainer) {
            return trainer.id ?
                <InfoContent trainer={trainer} /> :
                <Loading />
        } else {
            return <Redirect to='/not-found' />;
        }
    }
}

function InfoContent({ trainer }) {
    let url = require(`../common/images/profile-img/${trainer.id}.jpg`);
    return (
        <div className='Info'>
            <h1>{trainer.firstname} {trainer.lastname}</h1>
            <div className='Info-content'>
                <img
                    className='Info-content-image profile-img'
                    src={url}
                    alt={trainer.lastname}
                />
                <div className='Info-content-textbox'>
                    <p className='Info-content-text'>
                        Discipline: {trainer.type}
                    </p>
                    <p className='Info-content-text'>
                        Location: {trainer.address}
                    </p>
                    <p className='Info-content-text'>
                        £{trainer.rate}/hour
                </p>
                    <p className='Info-content-text'>
                        {trainer.description}
                    </p>
                </div>
                <div>
                    <Map title={trainer.address} map={trainer.map} />
                </div>
                <div className='chat'>
                    <Store name={trainer.name}>
                        <Dashboard />
                    </Store>
                </div>
            </div>
           <div className='info-button'>
             <Link to='/' ><button className='home-button'>Home</button></Link>
           </div>
        </div>
    );
}














