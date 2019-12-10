import './GoatCoral.scss';
import React from 'react';
import PropTypes from 'prop-types';

import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCoral extends React.Component {
  static propTypes = {
    someGoats: PropTypes.arrayOf(goatShape.goatShape),
  }

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
