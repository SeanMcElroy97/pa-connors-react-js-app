import React, { Component } from 'react';
import { getEvents } from './../services/fakeEventService';
import NextEvent from './common/nextEvent';

class Events extends Component {
    state = { 
        events : getEvents()
     }

    getNextEvent= () =>{
        const allEvents = [...this.state.events]
        const nextEvent = allEvents.reduce((soonestEv,currentEvent)=>{
            if(currentEvent.time>new Date().getTime() && currentEvent.time<soonestEv.time){
                return currentEvent
            }
            return soonestEv;
        });
        return nextEvent;
    }

    getEventDate = timeInMillis =>{
        const date= new Date(timeInMillis);
        return `${date.getDate()}/${date.getMonth()+1}`;
        
    }

    addZero = x =>{
        if(x<10){
            x= "0"+x
        }
        return x;
    }

    getStartTime = timeInMillis =>{
        const date = new Date(timeInMillis);
        return `${this.addZero(date.getHours())} : ${this.addZero(date.getMinutes())}`
    }

    render() { 
       
        return (
            <div>
                
                <NextEvent event={this.getNextEvent()}/>
           
                <table className="table">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Venue</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.events.map(eve =>
                            <tr key={eve.time}>
                                <td>{eve.title}</td>
                                <td>{eve.venue}</td>
                                <td>{this.getEventDate(eve.time)}</td>
                                <td>{this.getStartTime(eve.time)}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Events;