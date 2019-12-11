import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';
import AvailableGoats from '../components/AvailableGoats/AvailableGoats';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  useGoat = (goatId) => {
    goatData.useAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  };

  render() {
    return (
    <div className="App">
      <h1>Underwater Goat Yoga</h1>
      <AvailableGoats availableGoats={this.state.goats} />
      <GoatCoral someGoats={this.state.goats} freeGoats={this.freeGoat} useGoats={this.useGoat} />
    </div>
    );
  }
}

export default App;
