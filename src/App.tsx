import { useState, useEffect } from "react";
import Square from "./Components/Square";
import "./index.css";
import Patterns from "./Components/Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    //@ts-ignore
    // checkWin();
    checkTie();
    if (player == "X") {
      setPlayer("O");
    } else setPlayer("X");
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`winner is ${result.winner}`);
    }
  }, [result]);

  const chooseSquare = (square: any) => {
    setBoard(
      //@ts-ignore
      board.map((val, index) => {
        if (index == square && val == "") {
          return player;
        } else return val;
      })
    );
  };

  const checkWin = () => {
    //@ts-ignore
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;
      let founddWinningPattern = true;
      currentPattern.forEach((index: any) => {
        if (board[index] != firstPlayer) {
          founddWinningPattern = false;
        }
      });

      if (founddWinningPattern) {
        setResult({ winner: "player", state: "won" });
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "NoOne", state: "Tie" });
    }
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
