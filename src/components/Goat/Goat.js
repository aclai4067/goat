import './Goat.scss';
import React from 'react';

class Goat extends React.Component {
  render() {
    const aGoat = this.props.goat;
    return (
      <div className="card col-3 m-2">
        <img src={aGoat.imgUrl} className="card-img-top" alt={aGoat.name} />
        <div className="card-body">
          <h5 className="card-title">{aGoat.name}</h5>
          <p className="card-text">{aGoat.age}</p>
          <p className="card-text">{aGoat.description}</p>
        </div>
      </div>
    );
  }
}

export default Goat;
