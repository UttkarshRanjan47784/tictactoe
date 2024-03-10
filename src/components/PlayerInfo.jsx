import React, { useState } from 'react'

export default function PlayerInfo(props) {

    let [p1, setP1] = useState(`Player 1`);
    let [p2, setP2] = useState(`Player 2`);

    let saveP1 = () => {
        props.sendP1(p1);
    }

    let saveP2 = () => {
        props.sendP2(p2);
    }    

    let handleP1Change = (event) => { setP1(event.target.value) }
    let handleP2Change = (event) => { setP2(event.target.value) }


  return (
    <div className='player-info'>
        <div className='player-1-info'>
          <input type='text' name='p1Name' className='player-1-name-field' id={props.turn?`active-player`:null} value={p1} onChange={handleP1Change}></input>        
          <button className='player-sym-X'>X</button>
          <button onClick={saveP1} className='normal-btn'>SAVE NAME</button>
        </div>
        <div className='player-2-info'>
          <input type='text' name='p2Name' className='player-2-name-field' id={props.turn?null:`active-player`} value={p2} onChange={handleP2Change}></input>
          <button className='player-sym-O'>O</button>
          <button onClick={saveP2} className='normal-btn'>SAVE NAME</button>
        </div>
        
    </div>
  )
}
