import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        if (Math.random() < this.props.chanceLightStartsOn) row.push(true);
        else row.push(false);
      }
      board.push(row);
    }
    return board;
  }

  flipCellsAround = (coord) => {
    console.log(coord);
    let ncols = this.props.ncols;
    let nrows = this.props.nrows;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    // flipCell(y - 1, x + 1);
    // flipCell(y - 1, x - 1);
    // flipCell(y + 1, x - 1);
    // flipCell(y + 1, x + 1);

    let won = true;
    for (let i = 0; i < nrows; i++) {
      for (let j = 0; j < ncols; j++) {
        if (board[i][j]) {
          won = false;
          break;
        }
      }
      if (!won) break;
    }

    this.setState({ board: board, hasWon: won });
  };

  render() {
    console.log(this.state.board);
    return this.state.hasWon ? (
      <div className="winner">
        <h1 className="neon-orange">You</h1>
        <h1 className="neon-blue">Win!!</h1>
      </div>
    ) : (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>
            <tr>
              <Cell
                isLit={this.state.board[0][0]}
                flipCellsAroundMe={this.flipCellsAround}
                key="0-0"
                key2="0-0"
              />
              <Cell
                isLit={this.state.board[0][1]}
                flipCellsAroundMe={this.flipCellsAround}
                key="0-1"
                key2="0-1"
              />
              <Cell
                isLit={this.state.board[0][2]}
                flipCellsAroundMe={this.flipCellsAround}
                key="0-2"
                key2="0-2"
              />
              <Cell
                isLit={this.state.board[0][3]}
                flipCellsAroundMe={this.flipCellsAround}
                key="0-3"
                key2="0-3"
              />
              <Cell
                isLit={this.state.board[0][4]}
                flipCellsAroundMe={this.flipCellsAround}
                key="0-4"
                key2="0-4"
              />
            </tr>
            <tr>
              <Cell
                isLit={this.state.board[1][0]}
                flipCellsAroundMe={this.flipCellsAround}
                key="1-0"
                key2="1-0"
              />
              <Cell
                isLit={this.state.board[1][1]}
                flipCellsAroundMe={this.flipCellsAround}
                key="1-1"
                key2="1-1"
              />
              <Cell
                isLit={this.state.board[1][2]}
                flipCellsAroundMe={this.flipCellsAround}
                key="1-2"
                key2="1-2"
              />
              <Cell
                isLit={this.state.board[1][3]}
                flipCellsAroundMe={this.flipCellsAround}
                key="1-3"
                key2="1-3"
              />
              <Cell
                isLit={this.state.board[1][4]}
                flipCellsAroundMe={this.flipCellsAround}
                key="1-4"
                key2="1-4"
              />
            </tr>
            <tr>
              <Cell
                isLit={this.state.board[2][0]}
                flipCellsAroundMe={this.flipCellsAround}
                key="2-0"
                key2="2-0"
              />
              <Cell
                isLit={this.state.board[2][1]}
                flipCellsAroundMe={this.flipCellsAround}
                key="2-1"
                key2="2-1"
              />
              <Cell
                isLit={this.state.board[2][2]}
                flipCellsAroundMe={this.flipCellsAround}
                key="2-2"
                key2="2-2"
              />
              <Cell
                isLit={this.state.board[2][3]}
                flipCellsAroundMe={this.flipCellsAround}
                key="2-3"
                key2="2-3"
              />
              <Cell
                isLit={this.state.board[2][4]}
                flipCellsAroundMe={this.flipCellsAround}
                key="2-4"
                key2="2-4"
              />
            </tr>
            <tr>
              <Cell
                isLit={this.state.board[3][0]}
                flipCellsAroundMe={this.flipCellsAround}
                key="3-0"
                key2="3-0"
              />
              <Cell
                isLit={this.state.board[3][1]}
                flipCellsAroundMe={this.flipCellsAround}
                key="3-1"
                key2="3-1"
              />
              <Cell
                isLit={this.state.board[3][2]}
                flipCellsAroundMe={this.flipCellsAround}
                key="3-2"
                key2="3-2"
              />
              <Cell
                isLit={this.state.board[3][3]}
                flipCellsAroundMe={this.flipCellsAround}
                key="3-3"
                key2="3-3"
              />
              <Cell
                isLit={this.state.board[3][4]}
                flipCellsAroundMe={this.flipCellsAround}
                key="3-4"
                key2="3-4"
              />
            </tr>
            <tr>
              <Cell
                isLit={this.state.board[4][0]}
                flipCellsAroundMe={this.flipCellsAround}
                key="4-0"
                key2="4-0"
              />
              <Cell
                isLit={this.state.board[4][1]}
                flipCellsAroundMe={this.flipCellsAround}
                key="4-1"
                key2="4-1"
              />
              <Cell
                isLit={this.state.board[4][2]}
                flipCellsAroundMe={this.flipCellsAround}
                key="4-2"
                key2="4-2"
              />
              <Cell
                isLit={this.state.board[4][3]}
                flipCellsAroundMe={this.flipCellsAround}
                key="4-3"
                key2="4-3"
              />
              <Cell
                isLit={this.state.board[4][4]}
                key="4-4"
                key2="4-4"
                flipCellsAroundMe={this.flipCellsAround}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
