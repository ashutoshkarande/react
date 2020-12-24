import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { lat: null, errorMsg: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMsg: error.message })
    );
  }

  render() {
    return <SeasonDisplay lat={this.state.lat} err={this.state.errorMsg} />
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);