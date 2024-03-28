const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Everyone can learn to code! Yes, everyone!',
        location: 'Somestreet 25, 12345 San Somewhere',
        date: '2021-05-21',
        image: 'images/coding-event.jpg',
        isFeatured: false
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description: 'We know: Networking is no fun if you are an introvert person.',
        location: 'Somestreet 27, 12345 San Somewhere',
        date: '2024-01-01',
        image: 'images/introvert-event.jpg',
        isFeatured: true
    }
];

export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter(event => event.isFeatured);
}

export function getAllEvents(){
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter){
    const {year, month} = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month;
    });

    return filteredEvents;
}

export function getEventById(id){
    return DUMMY_EVENTS.filter(event => event.id === id);
}