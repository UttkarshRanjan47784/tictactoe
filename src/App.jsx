import React, { useState } from 'react'
import PlayerInfo from './components/PlayerInfo'
import GameBoard from './components/GameBoard';

export default function App() {

  //turn = true --> p1 turn and vice versa
  let [turn, setTurn] = useState(true);
  
  let [winner, setWinner] = useState(0);

  let [render1, setRender1] = useState(true);
  let [render2, setRender2] = useState(false);

  let [playerNames, setPlayerName] = useState({
    player1 : `Player 1`,
    player2 : `Player 2`,
  });

  let getChangeTurn = () => { setTurn((prev)=>{ return !prev }) }

  let getWinner = (player) =>{
    setWinner(player)
    setTurn((prev)=>{ return !prev })
  }

  let getP1 = (pName) => {
    console.log(pName);
    setPlayerName((prev)=>{
      return {
        ...prev,
        player1: pName,
      }
    });
  }

  let getP2 = (pName) => {
    setPlayerName((prev)=>{
      return {
        ...prev,
        player2: pName,
      }
    })
  }

  let handleReset = () => {
    setWinner(0);
    setTurn(true);
    setRender1((prev) => {return !prev});
    setRender2((prev) => {return !prev});
  }


  return (
    <div>
      <PlayerInfo turn={turn} sendP1={getP1}  sendP2={getP2} />
      {(render1)?<GameBoard turn={turn} sendChangeTurn={getChangeTurn} sendWinner={getWinner} />: null}
      {(render2)?<GameBoard turn={turn} sendChangeTurn={getChangeTurn} sendWinner={getWinner} />:null} 
      {(winner==0)? null : (winner == 3)? <div className='win-banner'>
      <h1>DRAW!</h1>      
      <button onClick={handleReset} className='normal-btn'>PLAY AGAIN!</button>
      </div> : <div className='win-banner'>
        <h1>{playerNames[`player${winner}`]} WINS</h1>
        <button onClick={handleReset} className='normal-btn'>PLAY AGAIN!</button>
      </div>}
    </div>
  )
}
