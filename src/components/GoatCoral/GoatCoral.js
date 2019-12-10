import './GoatCoral.scss';
import React from 'react';

class GoatCoral extends React.Component {
  render() {
    const myGoats = this.props.someGoats;

    return (
      <div className='App'>
        Goat Coral
      </div>
    );
  }
}

export default GoatCoral;
