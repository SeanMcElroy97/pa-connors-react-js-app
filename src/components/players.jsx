import React, { Component } from 'react';
import { getPlayers, getPlayerOverallRating } from './../services/fakePlayersService';
import firebase from 'firebase'


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

      

      componentDidMount(){
          console.log("Comp did mount")
          const db = firebase.database();
          const dbRefPlayers = db.ref().child('players')
          //const playerRef = dbRefPlayers.child('1');
          dbRefPlayers.on('value', snap =>{
              //console.log(snap.val())
              this.setState({players: snap.val()})
          })
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
    getOverallRating = player =>{
        return Math.ceil((player.drinkingAbility + player.golfingAbility + player.pokerAbility)/3)
    }

    

    render() { 
        const {players} = this.state;
        return ( 
        <div className="container d-flex justify-content-center">
            <div className="card-columns ">
                {players.map(p=>
                <div  onClick={()=>{this.props.history.push(`/players/${p.id}`)}} className={this.getCardBackgroundColor(p)} key={p.fullName} style={{width: '16rem'}}>
                     <div className={`card-header text-center ${this.getTextColor(p)}`}><h2 className="card-title">{this.getOverallRating(p)}</h2></div>
                        <div className={`card-header text-center ${this.getTextColor(p)}`}><h5 className="card-title">{p.fullName} </h5></div>
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