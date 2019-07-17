
import React from 'react';
import TrainerCover from './TrainerCover/TrainerCover';
import Loading from '../../Components/Loading/Loading';

export default class Trainers extends React.Component {
    
    constructor() {
        super();
        this.state = { trainersData: [] };
    }

    componentDidMount() {
        fetch('/rest/profiles')
            .then(res => res.json())
            .then(trainersData => this.setState( { trainersData } ))
    }

    render() {
        let trainers = this.state.trainersData;

        if(!trainers) {
            return <Loading />;
        }
        return (
            <div className='container'>
                {
                    trainers.map(trainer => (
                        <TrainerCover 
                            key = {trainer.id}
                            id = {trainer.id}
                            firstname = {trainer.firstname}
                            lastname = {trainer.lastname}
                            map = {trainer.map}
                            src = {trainer.src}
                            alt = {trainer.lastname}
                        />
                    ))
                }
          </div>
        );
    }
}

