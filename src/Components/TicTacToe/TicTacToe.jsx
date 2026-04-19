import React, { useState } from "react";
import './tictactoe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setxTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const squareBox = (index) => {
    return (
    <button className="squareBox" onClick={() => handleClick(index)}>
        {board[index]}
    </button>
    );
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = xTurn ? 'X' : 'O';
    setBoard(newBoard);
    setxTurn(!xTurn);
    const winnerCombination = checkWinner(newBoard);
    if(winnerCombination){
        setWinner(newBoard[winnerCombination[0]]);
    }
  }

  const checkWinner = (board) => {
    const combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i<combination.length; i++){
        const [a,b,c] = combination[i];
        if(board[a] === board[b] && board[b] === board[c]){
            return combination[i];
        }
    }
    return null;
  }
 
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setxTurn(true);
    setWinner(null);
  }

  return (
    <>
    <div className="board">
      <div className="board-row">
        {squareBox(0)}
        {squareBox(1)}
        {squareBox(2)}
      </div>
      <div className="board-row">
        {squareBox(3)}
        {squareBox(4)}
        {squareBox(5)}
      </div>
      <div className="board-row">
        {squareBox(6)}
        {squareBox(7)}
        {squareBox(8)}
      </div>
        {winner && <div style={{marginTop: "24px"}}>{winner} is winner of this Game</div>}
        <button style={{width: "60px", marginTop: "24px", padding: "5px", backgroundColor: "blue"}} onClick={resetBoard}>Reset</button>
    </div>
    
    </>
  );
};

export default TicTacToe;
