import React, {useState, useEffect} from 'react';
import firebase from 'firebase'



const PlayerForm = (props) => {
    const [player, setPlayer] = useState({});
    
    const playerId = props.match.params.id;
    const db = firebase.database();
    const dbRefPlayer = db.ref().child('players').child(playerId)

    useEffect(()=>{
        
        // //const dbPlayer = dbRefPlayers.ref().child(playerId)
        
        dbRefPlayer.on('value', snap =>{
            if(snap.val()===null){
                props.history.push('/players')
                return;
            }
            setPlayer(snap.val());

            
        })
        
    },[])

    function getNicknameList(array){
        if(Array.isArray(array)){
            return array.join().replace(",", " , ")
        }
        return ''
    }

    console.log(player)
    return ( 
        <form>
            <div className="container">
                <img className="rounded mx-auto d-block" style={{width: '200px', height: '200px'}} alt={`${player.fullName}'s picture`} src={player.imgsource}/>
                <div className="form-group">
                <label >Full Name</label>
                <input type="text" class="form-control form-control-md" value={player.fullName || ''} readOnly/>
                </div>
            
                <div className="form-group">
                <label >Nicknames</label>
                <input type="text" class="form-control form-control-md" value={getNicknameList(player.nickNames) || ''} readOnly/>
                </div>

                <div className="form-group">
                <label >Drinking Ability</label>
                <input type="text" class="form-control form-control-md" value={player.drinkingAbility || 0} readOnly/>
                </div>

                <div className="form-group">
                <label >Poker Ability</label>
                <input type="text" class="form-control form-control-md" value={player.pokerAbility || ''} readOnly/>
                </div>

                <div className="form-group">
                <label >Golf Ability</label>
                <input type="text" class="form-control form-control-md" value={player.golfingAbility || ''} readOnly/>
                </div>
            
            
            </div>
            
        </form>
        );
}
 
export default PlayerForm;