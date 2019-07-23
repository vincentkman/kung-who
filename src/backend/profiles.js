// "https://www.google.com/maps/embed/v1/place?q=bermondsey&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=canada%20water&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=Surrey%20Quays&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRfG3JloDdkgRwh6IcCt6xNE&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=Limehouse&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"


let getProfiles = function () {
    return [
        {
            id: 'adamsmith',
            firstname: 'Adam',
            lastname: 'Smith',
            address: 'Bermondsey',
            map: 'bermondsey',
            rate: '20',
            type: 'Brazilian Jiu Jitzu',
            description: "Hi, I'm Adam. A student who has become one with the art of BJJ. Do or do not, there is no try. Stationed in Bermondsey, my studio is in the old biscuit factory where we practice as a group or one on one."
        },
        {
            id: 'katieberry',
            firstname: 'Katie',
            lastname: 'Berry',
            address: 'Canada Water',
            map: 'canada water',
            rate: '30',
            type: 'Viet Vo Dao',
            description: "Hey, Katie Berry here, I've been learning Viet Vo Dao after seing it practiced on a family holiday to Vietnam since I was 12. Reaching 1st degree instructor level, im more than happy to teach others!"
        },
        {
            id: 'natalieprice',
            firstname: 'Natalie',
            lastname: 'Price',
            gender: 'Female',
            address: 'Surrey Quays',
            map: 'surrey quays',
            rate: '45',
            type: 'Boxing',
            description: "Hi everyone, I'm Natalie. After a few years working in the city i needed a way to let off some steam and took up boxing, my studio is mainly set up for sandbags and speedbags to work on form over sparing."
        },
        {
            id: 'peterjones',
            firstname: 'Peter',
            lastname: 'Jones',
            gender: 'Male',
            address: 'deptford',
            map: 'deptford',
            rate: '30',
            type: 'Southern Dragon Kung Fu',
            description: "Oi, I'm Peter Jones, not related to the Dragon but I certainly teach it."
        },
        {
            id: 'sarahhills',
            firstname: 'Sarah',
            lastname: 'Hills',
            gender: 'Female',
            address: 'Limehouse',
            map: 'Limehouse',
            rate: '40',
            type: 'taekwondo',
            description: "Learning Taekwondo means learning 5 essential tenents. These are courtesy, integrity, perseverance, self-control and indomitable spirit. If that hasn't scared you off, welcome jeja!"
        },
        {
            id: 'luciewinters',
            firstname: 'Lucie',
            lastname: 'Winters',
            gender: 'Female',
            address: 'manorhouse',
            map: 'manorhouse',
            rate: '25',
            type: 'Mixed Martial Arts',
            description:"Prepare for the octogan with an instructor who has a combined 7 years in Muay Thai, boxing and Judo."
        }
    ];
}

module.exports = getProfiles;



