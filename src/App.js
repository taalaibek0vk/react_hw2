import React from "react";

class Squares extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squareRed: 'red',
      squareBlue: 'blue'
    };
  }
  redColor = () => {
    this.setState(state => ({
      squareRed: state.squareRed === 'red' ? 'blue' : 'red',
      squareBlue: state.squareBlue === 'blue' ? 'red' : 'blue'
    }));
  }
  blueColor = () => {
    this.setState(state => ({
      squareRed: state.squareRed === 'red' ? 'blue' : 'red',
      squareBlue: state.squareBlue === 'blue' ? 'red' : 'blue',
    }));
  }
  render() {
    const { squareRed, squareBlue } = this.state;
    return (
      <div>
        <h1 className="header">Переключатель цветов</h1>
      <button
          className="square__red"
          style={{ backgroundColor: squareRed }}
          onClick={this.redColor}>
      </button>
      <button
        className="square__blue"
          style={{ backgroundColor: squareBlue }}
          onClick={this.blueColor}>
      </button>
      </div>
    );
  }
}

export default Squares;