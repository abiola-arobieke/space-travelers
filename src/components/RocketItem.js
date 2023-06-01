import '../styles/Rockets.css';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <div className="d-flex card">
    <div className="md-4">
      <div className="card-img">
        <img className="rocket-img" src={rocket.flickr_images[0]} alt="" />
      </div>
    </div>
    <div className="md-8 card-details">
      <h2>{rocket.name}</h2>
      <p className="description">{rocket.description}</p>
      <button type="button" className="btn-card">
        Add Reservation
      </button>
    </div>
  </div>
);

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
};

export default RocketItem;
