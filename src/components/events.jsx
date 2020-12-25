import React, { Component } from 'react';
import { getEvents } from './../services/fakeEventService';
import NextEvent from './common/nextEvent';
import Pagination from './common/pagination';
import { paginate } from './../utils/paginate';
import { sort } from './../utils/sorting';
import firebase from 'firebase'

class Events extends Component {
    state = { 
        events : [],
        pageSize : 5,
        currentPage: 1,
        order: 'desc'
     }

     componentDidMount(){
        const db = firebase.database();
        const dbRefPlayers = db.ref().child('events')
        dbRefPlayers.on('value', snap =>{
            this.setState({events : snap.val()})
        })
        
     }

    //  componentDidUpdate(){
    //     console.log(this.getNextEvent())
    //  }

    getNextEvent= () =>{
        const allEvents = [...this.state.events]
        let nextEvent = null;
        for(let event of allEvents){
            if (event.time>new Date().getTime() && nextEvent===null){
                nextEvent=event;
            }
            if(event.time>new Date() && event.time<nextEvent){
                nextEvent=event;
            }
        }
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

    getNoEvent=()=>{
            return (
                <div className="card text-center">
                <div className="card-header">
                Next Event
                </div>
                <div className="card-body">
                <h5 className="card-title">No upcoming events</h5>
                <p className="card-text">:(</p>
                </div>
                <div className="card-footer text-muted">
                </div>
                </div> 
            )
    }
    
    

    render() { 
        const eventsOrdered = sort(this.state.order, 'time', this.state.events)
       
        const events = paginate(eventsOrdered, this.state.currentPage, 5)

        // console.log(this.getNextEvent())
        return (
            <div>
                {this.getNextEvent()!==null && <NextEvent event={this.getNextEvent()}/>}
                {this.getNextEvent()===null && this.getNoEvent()}

           
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