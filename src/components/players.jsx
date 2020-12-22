import React, { Component } from 'react';
import { getPlayers, getPlayerOverallRating } from './../services/fakePlayersService';


class Players extends Component {

     state = { 
         players: getPlayers()
      }

      isChip = player =>{
        if (player.fullName==="Craig Kavanagh" || player.nickNames[0]==="Chip"){
            return true
        }
        return false;
      }
    
    getCardBackgroundColor = player =>{
        if (this.isChip(player)){
            return "card bg-primary";
        }
        return "card bg-warning"
    }
    getTextColor = player =>{
        if(this.isChip(player)){
            return "text-light"
        }
        
    }
    render() { 
        const {players} = this.state;
        return ( 
        <div className="container">
            <div class="card-columns">
                {players.map(p=>
                <div className={this.getCardBackgroundColor(p)} style={{width: '16rem'}}>
                    <div class={`card-header text-center ${this.getTextColor(p)}`}><h2 className="card-title">{getPlayerOverallRating(p.id)}</h2></div>
                    <div class={`card-header text-center ${this.getTextColor(p)}`}><h5 className="card-title">{p.fullName} </h5></div>
                    <img className="card-img-top" src={p.imgsource} style={{height: '200px'}} alt={`${p.fullName} img`}></img>
                    <div className="card-body">
                        <p className={`card-text ${this.getTextColor(p)}`}>Drinking ability: <b>{p.drinkingAbility}</b></p>
                        <p className={`card-text ${this.getTextColor(p)}`}>Poker ability: <b>{p.pokerAbility}</b></p>
                        <p className={`card-text ${this.getTextColor(p)}`}>Golf ability: <b>{p.golfingAbility}</b></p>
                    </div>
                </div>
                )}
            </div>
        </div> );
    }
}
 
export default Players;