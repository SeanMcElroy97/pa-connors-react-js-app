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
            {players.map(p=>
            <div className="card bg-warning" style={{width: '18rem'}}>
                <div class="card-header text-center"><h5 className="card-title">{p.fullName} {getPlayerOverallRating(p.id)}</h5></div>
                <img className="card-img-top" src="../unlockableCharacter.jpg" style={{height: '200px'}} alt={`${p.fullName} img`}></img>
                <div className="card-body">
                    <p className="card-text">Drinking : {p.drinkingAbility}</p>
                    <p className="card-text">Poker : {p.pokerAbility}</p>
                    <p className="card-text">Golf : {p.golfingAbility}</p>
                </div>
            </div>
            )}
        </div> );
    }
}
 
export default Players;