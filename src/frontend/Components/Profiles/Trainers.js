
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
            .then(trainersData => this.setState({ trainersData }))
    }

    searchFilter(input) {
        const searchInput = input.toUpperCase();
        function searchFormat(input) {
            return input
                .toUpperCase()
                .includes(searchInput);
        }
        return this.state.trainersData
            .filter(person => ( 
                searchFormat(person.firstname) || 
                searchFormat(person.lastname) ||
                searchFormat(person.type) ||
                searchFormat(person.rate) ||
                searchFormat(person.address)
        ));
    }

    searchHandler(event) {
        let value = event.target.value;
        return this.searchFilter(value).length > 0 ?
                this.setState({trainersData: this.searchFilter(value)}) :
                this.componentDidMount();
    }


    render() {
        let trainers = this.state.trainersData;

        if (!trainers) {
            return <Loading />;
        }
        return (
            <div>
                <input type="text" className="searchBar" placeholder="Search by type or location" onChange={event => this.searchHandler(event)} />
                <div className='container'>
                    {
                        trainers.map(trainer => (
                            <TrainerCover
                                key={trainer.id}
                                id={trainer.id}
                                firstname={trainer.firstname}
                                lastname={trainer.lastname}
                                type={trainer.type}
                                address={trainer.address}
                                rate={trainer.rate}
                                map={trainer.map}
                                src={trainer.src}
                                alt={trainer.lastname}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

