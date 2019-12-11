import './AvailableGoats.scss';
import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class AvailableGoats extends React.Component {
  static propTypes = {
    availableGoats: PropTypes.arrayOf(goatShape.goatShape),
  }

  getGoatCount = () => {
    const goats = this.props.availableGoats;
    return goats.filter((goat) => !goat.isBusy).length;
  }

  render() {
    return (
      <h3>{this.getGoatCount()} goats available</h3>
    );
  }
}

export default AvailableGoats;
