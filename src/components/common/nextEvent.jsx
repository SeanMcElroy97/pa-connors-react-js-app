import { min } from 'lodash';
import React, {useEffect, useRef, useState} from 'react';

const NextEvent = (props) => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const event=props.event;
    let interval = useRef();

    useEffect(()=>{
            startTimer();
        
    },[])

    
  
    
    const startTimer= ()=>{
        const countDownDate= event.time
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDownDate-now;

            const days= Math.floor(distance/(1000*60*60*24));
            const hours= Math.floor(distance%(1000*60*60*24)/(1000*60*60));
            const minutes= Math.floor(distance%(1000*60*60)/(1000*60));
            const seconds= Math.floor(distance%(1000*60)/(1000));

            if(distance<0){
                clearInterval(interval.current);

            }else{
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000)
    }

    

    const getTimeAmPm= timeInmillis =>{
        const date = new Date(timeInmillis);
        const hours = date.getHours();
        const minutes = date.getMinutes();
  
        if(hours<12){
            return `${hours} : ${minutes} am`
        }else{
            return `${hours-12} : ${minutes} pm`
        }
    }
    
    return ( 
        <div className="card text-center">
            <div className="card-header">
            Next Event
            </div>
            <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{getTimeAmPm(event.time)}</p>
            </div>
            <div className="card-footer text-muted">
            {`${days} Days : ${hours} Hours : ${minutes} minutes : ${seconds} seconds`}
            </div>
    </div> 
  );

  
}
 
export default NextEvent;