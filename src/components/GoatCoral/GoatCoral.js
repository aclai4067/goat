import './GoatCoral.scss';
import React from 'react';
import Goat from '../Goat/Goat';

class GoatCoral extends React.Component {
  render() {
    const myGoats = this.props.someGoats;

    const goatCards = myGoats.map((goat) => <Goat key={goat.id} goat={goat} />);

    return (
      <div className='App row d-flex flex-wrap justify-content-around'>
        {goatCards}
      </div>
    );
  }
}

export default GoatCoral;
