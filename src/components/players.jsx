import React, { Component } from 'react';
import { getPlayers, getPlayerOverallRating } from './../services/fakePlayersService';

class Players extends Component {
     state = { 
         players: getPlayers()
      }
    
    render() { 
        const {players} = this.state;
        return ( 
        <div className="container">
            <div class="card-columns">
                {players.map(p=>
                <div className="card bg-warning" style={{width: '18rem'}}>
                    <div class="card-header text-center"><h2 className="card-title">{getPlayerOverallRating(p.id)}</h2></div>
                    <div class="card-header text-center"><h5 className="card-title">{p.fullName} </h5></div>
                    <img className="card-img-top" src="../unlockableCharacter.jpg" style={{height: '200px'}} alt={`${p.fullName} img`}></img>
                    <div className="card-body">
                        <p className="card-text">Drinking ability: <b>{p.drinkingAbility}</b></p>
                        <p className="card-text">Poker ability: <b>{p.pokerAbility}</b></p>
                        <p className="card-text">Golf ability: <b>{p.golfingAbility}</b></p>
                    </div>
                </div>
                )}
            </div>
        </div> );
    }
}
 
export default Players;