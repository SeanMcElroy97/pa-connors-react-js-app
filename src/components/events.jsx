import React, { Component } from 'react';
import { getEvents } from './../services/fakeEventService';
import NextEvent from './common/nextEvent';
import Pagination from './common/pagination';
import { paginate } from './../utils/paginate';
import { sort } from './../utils/sorting';

class Events extends Component {
    state = { 
        events : getEvents(),
        pageSize : 5,
        currentPage: 1,
        order: 'desc'
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

    handlePageChange = page =>{
        this.setState({currentPage: page})
    }

    handleArrowDirection = ()=>{
        if(this.state.order==='asc') return <i className="fa fa-sort-asc" aria-hidden="true"></i> 
        return <i className="fa fa-sort-desc" aria-hidden="true"></i>
    }

    handleOrderChange = ()=>{
        if(this.state.order==='desc'){
            this.setState({order: 'asc'})
            return;
        }
        this.setState({order: 'desc'})
    }
    

    render() { 
        const eventsOrdered = sort(this.state.order, 'time', this.state.events)
       
        const events = paginate(eventsOrdered, this.state.currentPage, 5)
        return (
            <div>
                <NextEvent event={this.getNextEvent()}/>
           
                <table className="table">
                    <thead>
                        <tr>
                        <th>Title</th>
                        <th>Venue</th>
                        <th className="clickable" onClick={this.handleOrderChange}>Date {this.handleArrowDirection()}</th>
                        <th>Start Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(eve =>
                            <tr key={eve.time}>
                                <td>{eve.title}</td>
                                <td>{eve.venue}</td>
                                <td>{this.getEventDate(eve.time)}</td>
                                <td>{this.getStartTime(eve.time)}</td>
                            </tr>)}
                    </tbody>
                </table>
                <Pagination itemsCount={this.state.events.length} pageSize={this.state.pageSize} currentPage={this.state.currentPage} onPageChange={this.handlePageChange}/>
            </div>
        );
    }
}
 
export default Events;