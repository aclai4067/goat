import './Goat.scss';
import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
    useGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (e) => {
    const { useGoat, goat } = this.props;
    e.preventDefault();
    useGoat(goat.id);
  };

  render() {
    const aGoat = this.props.goat;
    return (
      <div className="card col-3 m-2">
        <img src={aGoat.imgUrl} className="card-img-top" alt={aGoat.name} />
        <div className="card-body">
          <h5 className="card-title">{aGoat.name}</h5>
          <p className="card-text">{aGoat.age}</p>
          <p className="card-text">{aGoat.description}</p>
          {
            (aGoat.isBusy) ? (<button className="btn btn-outline-info" onClick={this.freeGoatEvent}>Free Goat</button>)
              : (<button className="btn btn-outline-warning" onClick={this.useGoatEvent}>Use Goat</button>)
          }
        </div>
      </div>
    );
  }
}

export default Goat;
