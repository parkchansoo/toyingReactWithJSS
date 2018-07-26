import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App.js';
import classes from './App.style.js';


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className="square"
              onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square/>;
  }

  render() {
    return (
      <Fragment>
        <div className={classes.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={classes.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={classes.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}


class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <p>Game board</p>
        <div className="BoardContainer">
          <Board />
        </div>
        <div className="info">
          <p>current status</p>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();