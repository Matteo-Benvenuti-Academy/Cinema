import { useContext, useEffect, useState } from 'react';
import EventCard from '../components/home/EventCard';
import { LayoutPage } from '../layout/LayoutHoc';
import EventContext from '../context/EventContext';
import { Event } from '../interfaces/event.interface';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Days } from '../interfaces/days.interface';

function HomePage() {

    const {events, getAllEvent} = useContext(EventContext);
    const [date,setDate] = useState(dayjs(new Date()))
    const [dailyEvents,setDailyEvents] = useState<Event[]>([])

    useEffect(  () =>{
        getAllEvent()
    },[])

    useEffect(()=>{
        if(events && events.length != 0)
            setDailyEvents(findDateEvent(date))
    },[events])


    const findDateEvent = (date:dayjs.Dayjs | null) : Event[] => {
        if (date){
            let newEvents = events.filter((event:Event) => event.Days.map((show:Days) => confrontDate(new Date(show.Day),date.toDate())).includes(true));
            console.log(newEvents.length)
            return newEvents;
        }
        return findDateEvent(dayjs(new Date()))

    }

    const confrontDate = (date1:Date,date2:Date) => {
        if(date1.getFullYear() !== date2.getFullYear() ){    
            return false;
        }
        if(date1.getMonth() !== date2.getMonth() ){  
            return false;
        }
        if(date1.getDate() !== date2.getDate() ){ 
            return false;
        }  
        return true;
    }

    const changeDate = (newdate:dayjs.Dayjs | null) =>{
        if(!newdate)
            setDate(dayjs(new Date()))
        else(
            setDate(dayjs(newdate))
        )
        setDailyEvents(findDateEvent(date))
    }
    return ( 

        <div className='container'>

            <div style={{display : "flex", justifyContent: "end"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Prenota un film nel:" value={date} onChange={
                        (events) => changeDate(events)
                    }/>
                </LocalizationProvider>
            </div>

            <div className='row'>
                

                {dailyEvents.map((event:Event , idx:number)=> (
                    
                    <div key = {idx} className='col-12 col-md-3 d-flex justify-content-center'>
                        
                        <EventCard event={event}></EventCard>
                
                    </div>

                ))}
    
                
            </div>

        </div>
     );
}

const LayoutHome = LayoutPage(HomePage);

export default LayoutHome;