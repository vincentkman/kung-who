// "https://www.google.com/maps/embed/v1/place?q=bermondsey&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=canada%20water&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=Surrey%20Quays&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRfG3JloDdkgRwh6IcCt6xNE&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"
// "https://www.google.com/maps/embed/v1/place?q=Limehouse&key=AIzaSyA2mnrO-E4fx-eXWvqFrYbsVMxeF8le030"


let getProfiles = function() {
    return [
        { 
            id: 'adamsmith', 
            firstname: 'Adam', 
            lastname: 'Smith', 
            address: 'Bermondsey',
            map: 'bermondsey',
            rate: '20',
            type: 'Tai-Chi',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
        },
        { 
            id: 'katieberry', 
            firstname: 'Katie', 
            lastname: 'Berry', 
            address: 'Canada Water', 
            map: 'canada%20water',
            rate: '30',
            type: 'Wing-Chun',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
        {
            id: 'natalieprice', 
            firstname: 'Natalie', 
            lastname: 'Price', 
            gender: 'Female',
            address: 'Surrey Quays', 
            map: 'peckham',
            rate: '30',
            type: 'Wing-Chun',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
            },
        { 
            id: 'peterjones', 
            firstname: 'Peter', 
            lastname: 'Jones', 
            gender: 'Male',
            address: 'Southwark', 
            map: 'deptford',
            rate: 30,
            type: 'Wing-Chun',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
            },
        {
            id: 'sarahhills', 
            firstname: 'Sarah', 
            lastname: 'Hills', 
            gender: 'Female',
            address: 'Limehouse', 
            map: 'Limehouse',
            rate: '30',
            type: 'Wing-Chun',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
        }
    ];
}

module.exports = getProfiles;



