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
                                <td></td>
                                <td>{eve.time}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Events;