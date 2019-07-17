import trainer1 from './Components/common/images/profile-img/Adam-Smith.jpg'
import trainer2 from './Components/common/images/profile-img/Katie-Berry.jpg';
import trainer3 from './Components/common/images/profile-img/Natalie-Price.jpg';
import trainer4 from './Components/common/images/profile-img/Peter-Jones.jpg';
import trainer5 from './Components/common/images/profile-img/Sarah-Hills.jpg';

export default function getTrainers() {
    return [
        { 
            id: 'trainer1', 
            firstname: 'Adam', 
            lastname: 'Smith', 
            address: 'Bermondsey',
            lat: '51.497730',
            lng: '-0.079720',
            rate: '20',
            martialart: 'Tai-Chi',
            description: 'abc',
            trainerImage: trainer1,
        },
        { 
            id: 'trainer2', 
            firstname: 'Peter', 
            lastname: 'Jones', 
            address: 'Canada Water', 
            lat: '51.496344',
            lng: '-0.049438',
            rate: '30',
            martialart: 'Wing-Chun',
            description: 'abc',
            trainerImage: trainer2,
        },
        { 
            id: 'trainer3', 
            firstname: 'Natalie', 
            lastname: 'Price', 
            gender: 'Female',
            address: 'Surrey Quays', 
            lat: '51.496344',
            lng: '-0.049438',
            rate: '30',
            type: 'Wing-Chun',
            description: 'abc',
            trainerImage: trainer3,
        },
        { 
            id: 'trainer4', 
            firstname: 'Peter', 
            lastname: 'Jones', 
            gender: 'Male',
            address: 'Southwark', 
            lat: '51.502544',
            lng: '-0.103683',
            rate: 30,
            type: 'Wing-Chun',
            description: 'abc',
            trainerImage: trainer4,
        },
        { 
            id: 'trainer5', 
            firstname: 'Sarah', 
            lastname: 'Hills', 
            gender: 'Female',
            address: 'Limehouse', 
            lat: '51.512907',
            lng: '-0.035191',
            rate: '30',
            type: 'Wing-Chun',
            description: 'abc',
            trainerImage: trainer5,
        },
    ];
}