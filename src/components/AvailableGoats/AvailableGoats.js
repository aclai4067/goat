import './AvailableGoats.scss';
import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    availableGoats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const goats = this.props.availableGoats;
    const freeGoats = goats.filter((goat) => goat.isBusy === false).length;
    return (
      <h3>{freeGoats} goats available</h3>
    );
  }
}

export default AvailableGoats;
