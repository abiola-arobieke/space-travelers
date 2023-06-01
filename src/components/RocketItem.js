import '../styles/Rockets.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const RocketItem = ({ rocket, reservation, cancelReservation }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(reservation(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="d-flex card">
      <div className="md-4">
        <div className="card-img">
          <img className="rocket-img" src={rocket.flickr_images[0]} alt="" />
        </div>
      </div>
      <div className="md-8 card-details">
        <h2>{rocket.name}</h2>
        <p className="description">
          {rocket.reserved ? <span className="pills">reserved</span> : ''}
          {rocket.description}
        </p>
        {!rocket.reserved ? (
          <button
            type="button"
            className="btn-add"
            onClick={() => {
              handleClick(rocket.id);
            }}
          >
            Add Reservation
          </button>
        ) : (
          <button
            type="button"
            className="btn-cancel"
            onClick={() => {
              cancelReserve(rocket.id);
            }}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  reservation: PropTypes.func.isRequired,
  cancelReservation: PropTypes.func.isRequired,
};

export default RocketItem;
