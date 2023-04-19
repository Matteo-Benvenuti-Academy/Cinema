import { useState } from 'react'
import EventContext from './EventContext'
import { getEvents } from '../services/event.service'


const EventProvider = ({children}) => {
    
    const [events,setEvents] = useState([]);
    

    const getAllEvent = () =>{
        return getEvents().then(res => {
            setEvents(res)
            
            return res;
        });
    }

    return (
        <EventContext.Provider value={{events, getAllEvent}}>
            {children}
        </EventContext.Provider>
    )
} 

export default EventProvider;